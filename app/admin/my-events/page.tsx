"use client"

import React, { useEffect, useState } from "react"
import { getAllEvents, getEventsByUserId } from "@/lib/actions/event" 
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"


interface Event {
  id: string
  title: string
  eventHost: string
  category: string
  rating: number
  coverUrl: string
  description: string
  totalSpace: number
  availableSpaces: number
  eventDateTime: string | null 
  createdAt: string | null
}

const MyEvents = () => {
  const { data: session, status } = useSession()
  const [events, setEvents] = useState<Event[]>([]) 

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      console.log("✅ Fetching events for user:", session.user.id) 

      const fetchEvents = async () => {
        try {
          const data = await getAllEvents()

          
          const formattedData = data.map((event) => ({
            ...event,
            eventDateTime: event.eventDateTime ? new Date(event.eventDateTime).toISOString() : null,
            createdAt: event.createdAt ? new Date(event.createdAt).toISOString() : null,
          }))

          console.log(" User events:", formattedData) 
          setEvents(formattedData)
        } catch (error) {
          console.error("Error fetching user events:", error)
        }
      }
      fetchEvents()
    }
  }, [status, session])

  if (status === "loading") return <p>Loading...</p>
  if (!session?.user?.id) return <p>Please log in to see your events.</p>

  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <h2 className="text-xl font-semibold">My Created Events</h2>
      <div className="mt-5">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="border p-4 rounded-lg mb-4">
              <h3 className="text-lg font-bold">{event.title}</h3>
              <p>{event.eventDateTime ? new Date(event.eventDateTime).toLocaleString() : "No Date"}</p>
              <p>Spaces Left: {event.availableSpaces}</p>
              <div className="mt-2 flex gap-4">
                <Link href={`/admin/events/edit/${event.id}`}>
                  <Button className="bg-blue-500 text-white">Edit</Button>
                </Link>
                <Button className="bg-red-500 text-white">Delete</Button>
              </div>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </section>
  )
}

export default MyEvents
