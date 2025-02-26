import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

type  EventCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<EventCoverVariant, string> = {
    extraSmall: 'book-cover_extra_small',
    small: 'book-cover_small',
    medium: 'book-cover_medium',
    regular: 'book-cover_regular',
    wide: 'book-cover_wide',
}

interface EventCoverProps {
    className?: string;
    variant: EventCoverVariant
    coverImage: string

}

const EventCover = ({
    className, 
    variant = "regular",
    coverImage ='https://placehold.co/600x400.png'
}: EventCoverProps) => {
  return (
    <div className={cn('relative transition-all duration-300', 
        variantStyles[variant],
        className,
    )}>
        <div className='absolute z-10' style={{left: '12%', width: '87.5%', height:'88%'}}>
            <Image src={coverImage} alt='event image ' fill className='rounded-sm object-fill' />
        </div>
    </div>
  )
}

export default EventCover