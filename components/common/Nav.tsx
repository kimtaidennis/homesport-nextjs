import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <nav className='bg-dark-op px-4 py-3'>
            <ul className="flex items-center mb-0 pl-1 py-1">
                <li><Link className="md:pr-3 pr-2 font-medium hover:no-underline  hover:text-yellow cursor-pointer" href='/'>Home</Link></li>
                <li><Link className="md:px-3 px-2 font-medium hover:no-underline  hover:text-yellow cursor-pointer" href='/jackpot'>Jackpot</Link></li>
                <li><Link className="md:px-3 px-2 font-medium hover:no-underline  hover:text-yellow cursor-pointer" href='/casino'>Casino</Link></li>
                <li><Link className="md:px-3 px-2 font-medium hover:no-underline  hover:text-yellow cursor-pointer" href='/jetx'>JetX</Link></li>
                <li><Link className="md:px-3 px-2 font-medium hover:no-underline  hover:text-yellow cursor-pointer" href='/aviatrix'>Aviatrix</Link></li>
            </ul>
        </nav>
    )
}

export default Nav