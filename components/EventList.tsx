import React from 'react'
import EventCard from './EventCard';
import { EventType } from 'react-hook-form';



interface Props {
  title: string;
  events: AllEvent[]
  containerClassName?:string
}

const EventList = ({title, events, containerClassName}: Props) => {

  if (events.length < 2) return 
  return (
    <section className={containerClassName}>
        <h2 className='font-bebas-neue text-4xl text-dark-400'>{title}</h2>
        <ul className='event-list'>
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
          
        </ul>
    </section>
  )
}

export default EventList