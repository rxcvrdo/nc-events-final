import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import EventCover from './EventCover'

const EventOverview = ({
    title,
    event_host,
    category,
    rating,
    total_spaces,
    available_spaces,
    description,
    cover,
    summary,
}: AllEvent) => {
  return (
    <section className='event-overview'>
        <div className='flex flex-1 flex-col gap-5'>
            <h1 className='text-black'> {title}</h1>
            <div className='event-info'>
              <p>
               Event by <span className='font-semibold text-dark-200'>{event_host}</span> 
              </p>

              <p>
               Category{""} <span className='font-semibold text-dark-200'>{category}</span> 
              </p>
              <div className='flex flex-row gap-1'>
                <Image src="/icons/star.svg" alt='star' width={22} height={22} />
                <p>{rating}</p>
              </div>
            </div>
            <div className='event-spaces'>
                <p>
                    Total size of event: <span>{total_spaces}</span>
                </p>
                <p>
                    Available spaces: <span>{available_spaces}</span>
                </p>
            </div>
            <p className='event-description'>
                {description}

            </p>
            <Button className='event-overview'>
                <p className='font-bebas-neue text-cl text-dark-100'>Book Event</p>
            </Button>
        </div>
        <div className='relative flex flex-1 justify-center'>
            <div className='relative'>
                <EventCover
                variant="wide"
                className = "z-10"
                coverImage = {cover}
                />
            </div>
        </div>
    </section>
  )
}

export default EventOverview