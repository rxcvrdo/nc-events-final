"use server";

import { db } from "@/database/drizzle";
import { events, bookings, users } from "@/database/schema";
import { eq, sql } from "drizzle-orm";

export const getUserEvents = async (userId: string) => {
  if (!userId) throw new Error("User ID is required");

  try {
    const userEvents = await db
      .select({
        eventId: events.id,
        title: events.title,
        eventDateTime: events.eventDateTime,
        createdAt: events.createdAt,
        eventHost: events.eventHost,
        bookedUsers: sql`array_agg(DISTINCT ${users.fullName})`,
      })
      .from(events)
      .leftJoin(bookings, eq(events.id, bookings.eventId))
      .leftJoin(users, eq(bookings.userId, users.id))
      .where(eq(events.eventHost, userId))
      .groupBy(events.id); 

    return userEvents;
  } catch (error) {
    console.error("❌ Error fetching user events:", error);
    return [];
  }
};
