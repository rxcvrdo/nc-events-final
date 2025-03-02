'use server'

import { db } from "@/database/drizzle"
import {  events } from "@/database/schema"
import { eq } from "drizzle-orm"

export const bookEvent = async (params: BookEventParams) => {
    const {userId, eventId} = params

    try{
        const event = await db.select({
            availableSpaces: events.availableSpaces,
            eventDate: events.eventDateTime
        })
        .from(events).where(eq(events.id, eventId))
        .limit(1)

        if(!event.length || event[0].availableSpaces < 0) {
            return{
                success:false,
                error:"There is no more space for this event"
            }
        }

        const record = db.insert(bookedEvents).values({
        userId,
        eventId,
        eventDate: event[0].eventDate,
        })
        
        await db.update(events).set({availableSpaces: event[0].availableSpaces - 1})
        .where(eq(events.id,eventId))
    } catch(error) {
       console.log(error)
       
       return {
        success:false,
        error:"an error occured while booking event"
       }
    }
}

export const getAllEvents = async () => {
    try {
        const eventList = await db
            .select()
            .from(events)
            .orderBy(events.eventDateTime)

        return eventList
    } catch (error) {
        console.error("❌ Error fetching events:", error)
        return []
    }
}


export const getEventById = async (eventId: string) => {
    try {
        const event = await db
            .select()
            .from(events)
            .where(eq(events.id, eventId))
            .limit(1)

        return event[0] || null
    } catch (error) {
        console.error(" Error fetching event by ID:", error)
        return null
    }
}

export const getEventsByUserId = async (userId: string) => {
    if (!userId) throw new Error("User ID is required");
  
    try {
      console.log("🔍 Fetching events for user ID:", userId);
  
      const userEvents = await db
        .select()
        .from(events)
        .where(eq(events.eventHost, userId)) 
        .orderBy(events.eventDateTime);
  
      console.log("✅ User Events:", userEvents);
      return userEvents;
    } catch (error) {
      console.error("❌ Error fetching user events:", error);
      return [];
    }
  };