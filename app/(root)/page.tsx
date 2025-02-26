import EventList from "@/components/EventList";
import EventOverview from "@/components/EventOverview";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { sampleEvents } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import Image from "next/image";

const Home = async() => {
  
  return(

  <>
  <Hero />
  <EventOverview {...sampleEvents[0]} />

  <EventList
  title="latest Events"
  events={sampleEvents}
  containerClassName="mt-28 bg-gray-50 rounded-lg px-10"
  />
  </>
  )

}


export default Home
