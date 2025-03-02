"use server";

import { events} from "@/database/schema";
import { db } from "@/database/drizzle";

export const createEvent = async (params: EventParams) => {
  try {
    const newEvent = await db
      .insert(events)
      .values({
        title: params.title,
    eventHost: params.eventHost, 
    category: params.category,
    rating: params.rating,
    coverUrl: params.coverUrl,
    totalSpaces: params.totalSpaces,
    availableSpaces: params.availableSpaces, 
    description: params.description,
    eventDateTime: new Date(params.eventDateTime)

      }).returning()

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newEvent[0])),
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "An error occurred while creating the book",
    };
  }
};