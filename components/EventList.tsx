import React from 'react'
import EventCard from './EventCard';

interface Props {
  title: string;
  events: CustomEvent[]
  containerClassName?:string
}

const EventList = ({title, events, containerClassName}: Props) => {
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