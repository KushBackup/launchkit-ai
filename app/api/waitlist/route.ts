import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Store email in a JSON file (for now - later integrate with email service)
    const dataPath = path.join(process.cwd(), "data");
    const filePath = path.join(dataPath, "waitlist.json");

    // Ensure data directory exists
    try {
      await fs.mkdir(dataPath, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }

    let waitlist: Array<{ email: string; timestamp: string }> = [];

    // Read existing waitlist
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      waitlist = JSON.parse(fileContent);
    } catch (err) {
      // File doesn"t exist yet, start fresh
      waitlist = [];
    }

    // Check if email already exists
    if (waitlist.some((entry) => entry.email === email)) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // Add new email
    waitlist.push({
      email,
      timestamp: new Date().toISOString(),
    });

    // Save updated waitlist
    await fs.writeFile(filePath, JSON.stringify(waitlist, null, 2));

    // TODO: Integrate with email service (SendGrid, Mailchimp, etc.)
    // For now, just store locally

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}