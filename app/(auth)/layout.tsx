import { auth } from '@/auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout = async ({children} : {children: ReactNode}) => {
  const session = await auth()

  if (session) redirect("/")

  return (
    <main className='auth-container'>
      <section className='auth-form '>
        <div className='auth-box'>
          <div className='flex flex-row gap-2'>
          <Image src="/icons/nc-event-logo.svg" alt='logo' width={37} height={37} />
          <h1 className='text-2xl font-semibold text-black'>NC-EVENTS</h1>
        </div>
        </div>

        <div>
          {children}
        </div>

      </section>
      <section className='auth-illustration'>
        <Image 
        src='/images/stock.jpg'
        alt='auth illustration '
        height={1000}
        width={1000}
        className='size-full object-cover'
        ></Image>
      </section>
    </main>
  )
}

export default layout