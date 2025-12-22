import { NextResponse } from "next/server";
import { z } from "zod";
import { joinWaitlist } from "@/lib/waitlist";

const joinWaitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = joinWaitlistSchema.parse(body);

    await joinWaitlist(email);

    return NextResponse.json(
      { message: "Successfully joined the waitlist!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0]?.message || "Invalid email address" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to join waitlist. Please try again." },
      { status: 500 }
    );
  }
}

