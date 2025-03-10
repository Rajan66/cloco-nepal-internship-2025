import logo from '@/app/favicon.ico'
import Image from 'next/image'
import React from 'react'
import NavItem from './NavItem'

const Navbar = () => {
    return (
        <header className='sticky top-0 bg-dark w-full border-b-[2px] border-neutral-700'>
            <nav className='mx-[20%] flex justify-between items-center p-4'>
                <a href="/" className='flex gap-2 items-end cursor-pointer'>
                    <Image src={logo} width={50} height={50} alt='datemydaughter_logo' />
                    <span className='font-semibold text-red-300 text-2xl'>DateMyDaughter</span>
                </a>
                <NavItem />
            </nav>
        </header>
    )
}

export default Navbar