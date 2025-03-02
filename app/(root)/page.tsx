import EventList from "@/components/EventList";
import EventOverview from "@/components/EventOverview";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { sampleEvents } from "@/constants";
import { db } from "@/database/drizzle";
import { events, users } from "@/database/schema";
import Image from "next/image";
import { auth } from "../api/auth/auth";
import { desc } from "drizzle-orm";

const Home = async() => {

  const session = await auth()

  const latestEvents = (await db.select().from(events).limit(10).orderBy(desc(events.createdAt)))
  .map(event => ({
    id: event.id,
    title: event.title,
    eventHost: event.eventHost, 
    category: event.category,
    rating: event.rating,
    coverUrl: event.coverUrl,
    description: event.description,
    totalSpaces: event.totalSpace, 
    availableSpaces: event.availableSpaces, 
    summary: "", 
    createdAt: event.createdAt,
    eventDateTime: event.eventDateTime
  })) as AllEvent[];
  
  return(

  <>
  <Hero />
  <EventOverview {...latestEvents[0]} userId={session?.user?.id as string } />

  <EventList
  title="latest Events"
  events={latestEvents.slice(1)}
  containerClassName="mt-28 bg-gray-50 rounded-lg px-10"
  />
  </>
  )

}


export default Home
