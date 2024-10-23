"use client"

import { SignedIn, SignedOut } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const token = false;
    const handleLogout = () => {

    }
    return (
        <header className="px-4 py-5">
        <div className="flex justify-between items-center py-2">
            <Image src={'/images/logo.png'} alt={'Logo'} height={25} width={120}/>
            {/* <img src="/images/logo.png" alt="Logo" className="h-4" /> */}

            <SignedOut>
                <ul className="flex items-center mb-0">
                    <li><Link className=" font-medium mr-3 py-2 px-3 hover:text-yellow hover:no-underline hover:ring-1 hover:ring-offset-1 hover:ring-yellow hover:rounded-md" href='/sign-in'>Login</Link></li>
                    <li><Link className="rounded-md bg-yellow text-gray-800 px-3 py-2 font-medium border-2 border-yellow hover:bg-dark-bg hover:no-underline hover:text-yellow " href='/sign-up'>Register</Link></li>
                </ul>
            </SignedOut>

            <SignedIn>
                <ul className="flex items-center mb-0">
                    <li><Link className="px-2 hover:no-underline hover:text-yellow hover:font-medium" href='/my-bets'>Bets</Link></li>
                    <li><Link className="px-2 hover:no-underline hover:text-yellow hover:font-medium" href='/profile'>Profile</Link></li>
                    <li><span className="px-3 py-2 font-medium cursor-pointer rounded bg-yellow text-gray-800" onClick={ () => handleLogout() }>Logout</span></li>
                </ul>
            </SignedIn>
        </div>
    </header>
    )
}

export default Header