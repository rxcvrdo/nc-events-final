import React from 'react'
import EventCard from './EventCard';


interface EventType {
  id: number;
  title: string;
  event_host: string;
  category: string;
  rating: number;
  total_spaces: number;
  available_spaces: number;
  description: string;
  cover: string;
  summary: string;
  isBooked: boolean
}

interface Props {
  title: string;
  events: EventType[]
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