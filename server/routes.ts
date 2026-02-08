import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCustomRequestSchema, insertContactSchema, insertOrderSchema } from "@shared/schema";
import { z } from "zod";
import { Resend } from "resend";

async function sendEmailNotification(to: string, subject: string, html: string) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("Resend API key not found. Skipping email notification.");
    return false;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const response = await resend.emails.send({
      from: "PaidPortfolio <onboarding@resend.dev>",
      to,
      subject,
      html,
    });

    if (response.error) {
      console.error("Resend API Error:", response.error);
      return false;
    }

    console.log("Email sent successfully. ID:", response.data?.id);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

// ... existing code ...

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {



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
      const success = await sendEmailNotification(
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

      // Send confirmation email to User
      const clientConfirmationSuccess = await sendEmailNotification(
        request.email,
        "We received your request! - PaidPortfolio",
        `
        <h2>We received your custom portfolio request!</h2>
        <p>Hi ${request.name},</p>
        <p>Thanks for reaching out. We have received your request for a custom portfolio and will review it shortly.</p>
        <h3>Your Project Request:</h3>
        <p><strong>Budget:</strong> ${request.budget}</p>
        <p><strong>Timeline:</strong> ${request.timeline}</p>
        <p><strong>Description:</strong></p>
        <div style="white-space: pre-wrap; font-family: sans-serif; background: #f5f5f5; padding: 10px; border-radius: 5px; color: #333;">${request.description}</div>
        <br>
        <p>Best regards,</p>
        <p>The PaidPortfolio Team</p>
        `
      );

      res.status(201).json({ ...request, emailSent: success });
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
      const success = await sendEmailNotification(
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

      res.status(201).json({ ...message, emailSent: success });
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
