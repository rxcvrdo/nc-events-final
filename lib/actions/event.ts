'use server'

import { db } from "@/database/drizzle"
import { bookedEvents, events } from "@/database/schema"
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