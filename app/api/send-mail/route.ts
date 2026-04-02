import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, mobile } = await req.json();

    if (!subject || !message) {
      return NextResponse.json(
        { error: "Subject and message are required" },
        { status: 400 },
      );
    }

    const words_limit = Number(process.env.WORDS_LIMIT) || 20;

    if (message.trim().split(/\s+/).length < words_limit) {
      return NextResponse.json(
        { error: `Message must be at least ${words_limit} words` },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      // bcc: process.env.SMTP_USER,
      subject,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
Mobile Number: ${mobile}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      {
        error:
          "Failed to send message. Please contact support at +918700228181.",
      },
      { status: 500 },
    );
  }
}
