import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="hidden md:block bg-dark-bg text-sm text-white text-center py-6">
            <p className="mb-1 text-light-blue">© 2023 Betano</p>
            <ul className="flex space-x-3 justify-center">
                <li><Link href="/privacy-policy" className="hover:text-yellow">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-yellow">Terms</Link></li>
                <li><Link href="/workers" className="hover:text-yellow">Workers</Link></li>
            </ul>
        </footer>
    )
}

export default Footer