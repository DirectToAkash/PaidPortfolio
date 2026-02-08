
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
    console.error("No RESEND_API_KEY found.");
    process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);

async function simulateRouteLogic() {
    console.log("Simulating Route Logic...");

    const adminEmail = "directtoakash@gmail.com";
    // This email SHOULD fail in sandbox mode
    const clientEmail = "client@example.com";

    console.log(`1. Sending Admin Email to ${adminEmail}...`);
    let adminSuccess = false;
    try {
        const r1 = await resend.emails.send({
            from: "PaidPortfolio <onboarding@resend.dev>",
            to: adminEmail,
            subject: "Admin Test",
            html: "<p>Admin Notification</p>",
        });
        if (!r1.error) adminSuccess = true;
        console.log("Admin Email Result:", r1.error ? "FAILED" : "SUCCESS", r1.data?.id);
    } catch (e) { console.error(e); }

    console.log(`2. Sending Client Email to ${clientEmail}...`);
    let clientSuccess = false;
    try {
        const r2 = await resend.emails.send({
            from: "PaidPortfolio <onboarding@resend.dev>",
            to: clientEmail,
            subject: "Client Test",
            html: "<p>Client Confirmation</p>",
        });
        if (!r2.error) clientSuccess = true;
        console.log("Client Email Result:", r2.error ? "FAILED" : "SUCCESS", r2.error);
    } catch (e) {
        console.log("Client Email threw error (expected in sandbox):", e.message);
    }

    // LOGIC CHECK
    console.log("--- LOGIC CHECK ---");
    if (adminSuccess && !clientSuccess) {
        console.log("[Simulation] Admin received, client failed.");
        console.log("[Simulation] API would return: { emailSent: true }");
        console.log("TEST PASSED: User will see SUCCESS message.");
    } else if (!adminSuccess) {
        console.log("[Simulation] Admin failed.");
        console.log("[Simulation] API would return: { emailSent: false }");
        console.log("TEST FAILS: Admin email must succeed.");
    } else {
        console.log("[Simulation] Both succeeded (User verified?).");
        console.log("[Simulation] API would return: { emailSent: true }");
    }
}

simulateRouteLogic();
