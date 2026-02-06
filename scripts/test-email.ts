
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Manually parse .env file
const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, "utf-8");
    envConfig.split("\n").forEach((line) => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            const key = match[1].trim();
            const value = match[2].trim().replace(/^["']|["']$/g, ""); // Remove quotes if present
            process.env[key] = value;
        }
    });
}

async function testEmail() {
    console.log("Testing email configuration...");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    // Do not log the full password for security, just check if it exists
    console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("Missing EMAIL_USER or EMAIL_PASS in .env file");
        return;
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        console.log("Attempting to send test email to:", process.env.EMAIL_USER);
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to self
            subject: "Test Email from Portfolio Debugger",
            text: "If you receive this, your email configuration is correct!",
        });

        console.log("Email sent successfully!");
        console.log("Message ID:", info.messageId);
    } catch (error) {
        console.error("Failed to send email.");
        console.error("Error details:", error);
    }
}

testEmail();
