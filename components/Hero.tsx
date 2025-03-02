import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
        <div className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 bg-gray-50 rounded-md px-5">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8 ">
            <h1 className="h1-bold font-sans">
            Connect, Share, Experience: Events Without Limits!
            </h1>
            <p className="p-regular-20 md:p-regular-24">Learn limitless skills with our global community events platform that specialise in <span className='text-red'>free</span> events </p>
            <Button className="bg-black text-white hover:bg-white hover:text-[#d35959] hover:underline w-full sm:w-fit " asChild size="lg">
              <Link href="#events">
                Explore more
              </Link>
            </Button>
          </div>
          <Image
          src="/icons/hero-new-w.png"
          alt="hero"
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          unoptimized
          />
        </div>
      </div>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">
        </h2>
        </section>
    </div>

  )
}

export default Hero