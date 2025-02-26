import Link from 'next/link'
import React from 'react'
import EventCover from './EventCover'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'

const EventCard = ({id, 
    title, 
    category, 
    cover, 
    isBooked = false}
    : Event) => 
    <li className={cn(isBooked && "xs:w-52 w-full")}>
        <Link href={`/events/${id}`} className={cn(isBooked && 'w-full flex flex-col items-center')}>
            <EventCover variant='wide' coverImage={cover} />

            <div className={cn("mt-4", !isBooked && "xs:max-w-40 max-w-28")}>
                <p className='event-title'>{title}</p>
                <p className='event-category'>{category}</p>
            </div>

            {isBooked && (
                <div className='mt-3 w-full'>
                    <div className='event-booked'>
                        <Image src="/icons/calendar.svg" 
                        alt='calendar'
                        width={18}
                        height={18}
                        className='object-contain'
                        />
                    <p className='text-dark-100'>7 days until event</p>
                    </div>
                    <Button className='event-btn'>Add to Google Calendar</Button>
                </div>
            )}
        </Link>
    </li>
  

export default EventCard