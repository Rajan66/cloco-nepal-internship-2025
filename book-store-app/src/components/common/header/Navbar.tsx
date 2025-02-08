import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import ThemeToggle from '../ThemeToggle'
import DropdownProfile from '../DropdownProfile'

type TUser = {
    name: string | null | undefined;
    email: string;
}

const Navbar = () => {
    // dummy type and name, replace with username when auth is implemented
    const user: TUser = {
        name: "Rajan",
        email: "rajanmaharjan042@gmail.com"
    }

    return (
        <header className='w-full top-0 bg-dark border-b-[2px] border-neutral-700'>
            <nav className=' flex justify-between items-center p-4'>
                <SidebarTrigger className="" />
                <div className='flex gap-4 justify-center items-center'>
                    <DropdownProfile user={user} />
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
}

export default Navbar