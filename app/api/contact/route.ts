

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 requests per window per IP
const rateLimitStore: Record<string, { count: number; timestamp: number }> = {};

function validateEmail(email: string) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

function sanitize(str: string) {
  return str.replace(/[<>]/g, "");
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "local";
    const now = Date.now();
    // Rate limiting
    if (!rateLimitStore[ip] || now - rateLimitStore[ip].timestamp > RATE_LIMIT_WINDOW) {
      rateLimitStore[ip] = { count: 1, timestamp: now };
    } else {
      rateLimitStore[ip].count++;
      if (rateLimitStore[ip].count > RATE_LIMIT_MAX) {
        return NextResponse.json({ error: "Rate limit exceeded. Please try again later." }, { status: 429 });
      }
    }

    const data = await request.json();
    // Validate required fields
    const requiredFields = ["firstName", "lastName", "email", "subject", "message"];
    for (const field of requiredFields) {
      if (!data[field] || typeof data[field] !== "string" || !data[field].trim()) {
        return NextResponse.json({ error: `Missing or invalid field: ${field}` }, { status: 400 });
      }
    }
    // Email validation
    if (!validateEmail(data.email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    // Sanitize input
    const sanitizedData = {
      firstName: sanitize(data.firstName),
      lastName: sanitize(data.lastName),
      email: sanitize(data.email),
      subject: sanitize(data.subject),
      message: sanitize(data.message),
    };

    // Send email using Resend
    try {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "daniel.kurhinen.photo@gmail.com",
        subject: `New Contact Form Message: ${sanitizedData.subject}`,
  replyTo: sanitizedData.email,
        text: `Name: ${sanitizedData.firstName} ${sanitizedData.lastName}\nEmail: ${sanitizedData.email}\nSubject: ${sanitizedData.subject}\nMessage: ${sanitizedData.message}`,
      });
    } catch (err) {
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
