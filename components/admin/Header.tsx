import { Session } from 'next-auth'
import React from 'react'

const Header = ({session} : {session : Session}) => {
  return (
    <header className='admin-header'>
        <div>
            <h2 className='text-dark-400 font-semibold text-2xl' >
                {session?.user?.name}
                <p className='text-base text-slate-500'>Monitor all users and Events here</p>
            </h2>
        </div>
        <p>Search</p>
    </header>
  )
}

export default Header