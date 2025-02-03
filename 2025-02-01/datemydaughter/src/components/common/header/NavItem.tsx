import React from 'react'
import { navItems } from "./list/navItems"

const NavItem = () => {

    return (
        <div >
            <ul className='flex items-center gap-10'>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.url} className='hover:text-red-300'><span>{item.name}</span></a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavItem