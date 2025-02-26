import EventForm from '@/components/admin/forms/EventForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <Button asChild className='back-btn'>
        <Link href='/admin/events'>Go Back</Link>
    </Button>

    <section className='w-full max-w-2xl'>
        <EventForm/>
    </section>
    </>
  )
}

export default page