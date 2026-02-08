import { Resend } from "resend";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env file manually
const envPath = path.resolve(__dirname, "../.env");
let RESEND_API_KEY = process.env.RESEND_API_KEY;

if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, "utf-8");
    envConfig.split("\n").forEach((line) => {
        const [key, value] = line.split("=");
        if (key && value && key.trim() === "RESEND_API_KEY") {
            RESEND_API_KEY = value.trim();
        }
    });
}

if (!RESEND_API_KEY) {
    console.error("No RESEND_API_KEY found in .env or environment");
    process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);

async function testEmail() {
    console.log("Testing email sending...");

    // Test 1: Send to verified email (likely the user's email)
    const userEmail = "directtoakash@gmail.com";
    console.log(`Attempting to send to ${userEmail}...`);

    try {
        const response1 = await resend.emails.send({
            from: "PaidPortfolio <onboarding@resend.dev>",
            to: userEmail,
            subject: "Test Email to Admin",
            html: "<p>This is a test email to the probable account owner.</p>",
        });

        if (response1.error) {
            console.error(`FAILED to send to ${userEmail}:`, response1.error);
        } else {
            console.log(`SUCCESS sending to ${userEmail}. ID:`, response1.data?.id);
        }
    } catch (err) {
        console.error(`EXCEPTION sending to ${userEmail}:`, err);
    }

    // Test 2: Send to unverified/random email
    const clientEmail = "test_client@example.com";
    console.log(`Attempting to send to ${clientEmail}...`);

    try {
        const response2 = await resend.emails.send({
            from: "PaidPortfolio <onboarding@resend.dev>",
            to: clientEmail,
            subject: "Test Email to Client",
            html: "<p>This is a test email to a random client.</p>",
        });

        if (response2.error) {
            console.error(`FAILED to send to ${clientEmail}:`, response2.error);
            console.log("NOTE: In Resend Sandbox/Onboarding mode, you can only send to the verified email address.");
        } else {
            console.log(`SUCCESS sending to ${clientEmail}. ID:`, response2.data?.id);
        }
    } catch (err) {
        console.error(`EXCEPTION sending to ${clientEmail}:`, err);
    }
}

testEmail();
