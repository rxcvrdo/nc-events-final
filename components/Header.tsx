import { signOut } from "@/app/api/auth/auth"
import { cn, getInitials } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className='my-10 flex justify-between gap-5 bg-gray-50 rounded-md p-4'>
      <Link href="/">
        <Image src="/icons/nc-event-logo.svg" alt="logo" width={40} height={40}/>
      </Link>

      <ul className='flex flex-row items-center gap-8'>
        <li>
          <Link href="/admin">
            <Button variant="outline">Admin</Button>
          </Link>
        </li>

        <li>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button>Logout</Button>
          </form>
        </li>
      </ul>
    </header>
  )
}

export default Header
