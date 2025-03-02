"use server";

import { db } from "@/database/drizzle";
import { bookings, users, events } from "@/database/schema";
import { eq } from "drizzle-orm";

export const bookEvent = async (eventId: string, userId: string) => {
  if (!userId) throw new Error("User is not authenticated");

  try {
    console.log("📌 Checking user and event:", { userId, eventId });

    // Check if user exists
    const userExists = await db.select().from(users).where(eq(users.id, userId)).limit(1);
    if (!userExists.length) throw new Error("User does not exist");

    // Fetch the event details
    const event = await db.select().from(events).where(eq(events.id, eventId)).limit(1);
    if (!event.length) throw new Error("Event does not exist");

    const eventDate = event[0].eventDate; 

    console.log("📌 User and event exist. Booking event...");

   
    await db.insert(bookings).values({
      eventId,
      userId,
      eventDate, //
    });

    ;
    return { success: true };
  } catch (error) {
    console.error("❌ Database error:", error);
    return { success: false, error: error.message || "Failed to book event" };
  }
};
