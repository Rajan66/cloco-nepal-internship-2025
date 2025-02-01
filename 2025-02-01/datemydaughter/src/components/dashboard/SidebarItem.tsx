import { sidebarItems } from './list/sidebarItems'
import React from 'react'

const SidebarItem = () => {
    return (
        <ul className='w-full flex flex-col gap-6 justify-center items-start '>
            {sidebarItems.map((item, index) => (
                <li key={index} className='w-full hover:bg-neutral-500 p-4 flex justify-start items-center gap-2 cursor-pointer'>
                    <span className='ml-4'><item.icon /></span>
                    <p className='text-lg font-semibold'>{item.name}</p>
                </li>
            ))}
        </ul>
    )
}

export default SidebarItem