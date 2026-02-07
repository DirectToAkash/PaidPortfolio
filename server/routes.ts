import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCustomRequestSchema, insertContactSchema, insertOrderSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";
import dns from "dns";
import net from "net";

// Force IPv4 to avoid timeouts on some hosting providers
dns.setDefaultResultOrder("ipv4first");

// Transporter will be created on demand to ensure env vars are loaded


async function sendEmailNotification(to: string, subject: string, html: string) {
  //... (keep existing function logic helper) ...
  // Log configuration status (masked for security)
  const user = process.env.EMAIL_USER;
  const hasPass = !!process.env.EMAIL_PASS;
  // console.log(`[Email Debug] ... `); // Keep existing logs or commented

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("Email credentials not found. Skipping email notification.");
    return { success: false, error: "Missing credentials" };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Increased timeouts
    connectionTimeout: 30000, // 30 seconds
    greetingTimeout: 30000,   // 30 seconds
    socketTimeout: 30000,     // 30 seconds
    debug: true,              // Enable debug output
    logger: true,             // Log to console
    // Force IPv4 for the socket connection
    family: 4
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
    });
    console.log("Email sent successfully. MessageId:", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    // Log the full error object for debugging in production
    if (error instanceof Error) {
      console.error("Stack:", error.stack);
      return { success: false, error: error.message };
    }
    return { success: false, error: String(error) };
  }
}

// ... existing code ...

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Email Test API - Temporary for debugging
  app.get("/api/test-email", async (req, res) => {
    try {
      // Diagnostic checks
      const user = process.env.EMAIL_USER;
      const pass = process.env.EMAIL_PASS;

      // 1. DNS Check
      let dnsInfo: any = "pending";
      try {
        const lookup = await dns.promises.lookup("smtp.gmail.com", { family: 4 });
        dnsInfo = { address: lookup.address, family: lookup.family };
      } catch (e: any) {
        dnsInfo = { error: e.message };
      }

      // 2. TCP Port Check (Force IPv4)
      const checkPort = (port: number) => new Promise<string>((resolve) => {
        const socket = new net.Socket();
        socket.setTimeout(3000);
        socket.on('connect', () => { socket.destroy(); resolve("open (IPv4)"); });
        socket.on('timeout', () => { socket.destroy(); resolve("timeout"); });
        socket.on('error', (e) => { socket.destroy(); resolve(`error: ${e.message}`); });
        socket.connect({ port, host: "smtp.gmail.com", family: 4 });
      });

      const port587 = await checkPort(587);
      const port465 = await checkPort(465);

      const debugInfo = {
        hasUser: !!user,
        hasPass: !!pass,
        userPrefix: user ? user.substring(0, 3) + "***" : "MISSING",
        network: {
          dns: dnsInfo,
          port587: port587,
          port465: port465
        }
      };

      console.log("Test email debug:", debugInfo);

      const result = await sendEmailNotification(
        "directtoakash@gmail.com",
        "Test Email from Production",
        "<h1>It Works!</h1><p>If you are seeing this, the email configuration is correct.</p>"
      );

      if (result.success) {
        res.json({ success: true, message: "Email sent successfully", debug: debugInfo });
      } else {
        res.status(500).json({ success: false, message: result.error || "Failed to send email", debug: debugInfo });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Error triggering email", error: String(error) });
    }
  });

  // Templates API
  app.get("/api/templates", async (req, res) => {
    try {
      const templates = await storage.getTemplates();
      res.json(templates);
    } catch (error) {
      console.error("Error fetching templates:", error);
      res.status(500).json({ error: "Failed to fetch templates" });
    }
  });

  app.get("/api/templates/featured", async (req, res) => {
    try {
      const templates = await storage.getFeaturedTemplates();
      res.json(templates);
    } catch (error) {
      console.error("Error fetching featured templates:", error);
      res.status(500).json({ error: "Failed to fetch featured templates" });
    }
  });

  app.get("/api/templates/:id", async (req, res) => {
    try {
      const template = await storage.getTemplate(req.params.id);
      if (!template) {
        return res.status(404).json({ error: "Template not found" });
      }
      res.json(template);
    } catch (error) {
      console.error("Error fetching template:", error);
      res.status(500).json({ error: "Failed to fetch template" });
    }
  });

  // Orders API
  app.post("/api/orders", async (req, res) => {
    try {
      const validatedData = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(validatedData);
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid order data", details: error.errors });
      }
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Failed to create order" });
    }
  });

  app.get("/api/orders/:id", async (req, res) => {
    try {
      const order = await storage.getOrder(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      console.error("Error fetching order:", error);
      res.status(500).json({ error: "Failed to fetch order" });
    }
  });

  // Custom Requests API
  app.post("/api/custom-requests", async (req, res) => {
    try {
      const validatedData = insertCustomRequestSchema.parse(req.body);
      const request = await storage.createCustomRequest(validatedData);

      // Send notification email
      const result = await sendEmailNotification(
        "directtoakash@gmail.com",
        "New Custom Portfolio Request",
        `
        <h2>New Custom Portfolio Request</h2>
        <p><strong>Name:</strong> ${request.name}</p>
        <p><strong>Email:</strong> ${request.email}</p>
        <p><strong>Phone:</strong> ${request.phone || "N/A"}</p>
        <p><strong>Budget:</strong> ${request.budget}</p>
        <p><strong>Timeline:</strong> ${request.timeline}</p>
        <p><strong>Profession:</strong> ${request.profession || "N/A"}</p>
        <h3>Description:</h3>
        <p>${request.description}</p>
        `
      );

      res.status(201).json({ ...request, emailSent: result.success });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid request data", details: error.errors });
      }
      console.error("Error creating custom request:", error);
      res.status(500).json({ error: "Failed to create custom request" });
    }
  });

  app.get("/api/custom-requests", async (req, res) => {
    try {
      const requests = await storage.getCustomRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching custom requests:", error);
      res.status(500).json({ error: "Failed to fetch custom requests" });
    }
  });

  // Contact API
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);

      // Send notification email to Admin
      await sendEmailNotification(
        "directtoakash@gmail.com",
        `New Contact/Booking: ${message.subject}`,
        `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${message.name}</p>
        <p><strong>Email:</strong> ${message.email}</p>
        <p><strong>Subject:</strong> ${message.subject}</p>
        <h3>Message:</h3>
        <div style="white-space: pre-wrap; font-family: monospace; background: #f5f5f5; padding: 10px; border-radius: 5px;">${message.message}</div>
        `
      );

      // Send confirmation email to User
      const result = await sendEmailNotification(
        message.email,
        "Booking Confirmation - PaidPortfolio",
        `
        <h2>We received your request!</h2>
        <p>Hi ${message.name},</p>
        <p>Thanks for getting in touch. We have received your message regarding:</p>
        <blockquote>${message.subject}</blockquote>
        <p>We will get back to you shortly.</p>
        <br>
        <p>Best regards,</p>
        <p>The Team</p>
        `
      );

      res.status(201).json({ ...message, emailSent: result.success });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid contact data", details: error.errors });
      }
      console.error("Error creating contact message:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  // Testimonials API
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  return httpServer;
}
