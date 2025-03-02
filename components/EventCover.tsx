"use client"
import config from '@/lib/config';
import { cn } from '@/lib/utils';

import { IKImage } from 'imagekitio-next';
import Image from 'next/image';
import React, { useState } from 'react';

type EventCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<EventCoverVariant, string> = {
    extraSmall: 'book-cover_extra_small',
    small: 'book-cover_small',
    medium: 'book-cover_medium',
    regular: 'book-cover_regular',
    wide: 'book-cover_wide',
};

interface EventCoverProps {
    className?: string;
    variant?: EventCoverVariant;
    coverImage: string;
    fallbackImage?: string; // Next.js fallback image
}

const EventCover = ({
    className,
    variant = "regular",
    coverImage = 'https://placehold.co/600x400.png',
    fallbackImage = coverImage, // Default fallback is the same image
}: EventCoverProps) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className={cn(
            'relative transition-all duration-300',
            variantStyles[variant],
            className,
        )}>
            <div className='absolute z-10' style={{ left: '12%', width: '87.5%', height: '88%' }}>
                {/* ImageKit Image */}
                {!imageError && (
                    <IKImage
                        path={coverImage}
                        urlEndpoint={config.env.imagekit.urlEndpoint}
                        alt='event image'
                        fill
                        className='rounded-sm object-fill'
                        loading='lazy'
                        lqip={{ active: true }}
                        onError={() => setImageError(true)} // If ImageKit fails, fallback to next/image
                    />
                )}

                {/* Next.js Image (Fallback) */}
                {imageError && (
                    <Image
                        src={fallbackImage}
                        alt='event image'
                        fill
                        className='rounded-sm object-fill'
                        loading='lazy'
                    />
                )}
            </div>
        </div>
    );
}

export default EventCover;
