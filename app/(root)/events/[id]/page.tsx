import { auth } from '@/app/api/auth/auth'
import EventOverview from '@/components/EventOverview'
import { db } from '@/database/drizzle'
import { events } from '@/database/schema'
import { eq } from 'drizzle-orm'
import { url } from 'inspector'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

const page = async ({params} : {params: Promise <{id: string}> }) => {
    const id = (await params).id
    const session = await auth()

    const [eventDetails] = await db.select().from(events).where(eq(events.id, id)).limit(1)

    if(!eventDetails) redirect("/404")

        console.log(eventDetails)
  return (
    <>
        <EventOverview {...eventDetails} userId={session?.userId?.id as string} />
    </>
  )
}

export default page