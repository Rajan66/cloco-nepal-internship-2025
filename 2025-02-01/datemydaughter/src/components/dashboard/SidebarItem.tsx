import { sidebarItems } from './list/sidebarItems'
import React from 'react'

const SidebarItem = () => {
    return (
        <ul className='w-full flex flex-col gap-6 justify-center items-start '>
            {sidebarItems.map((item, index) => (
                <a key={index} href={item.url} className='w-full hover:bg-neutral-500   cursor-pointer'>
                    <li className='flex justify-start items-center gap-2 p-4'>
                        <span className='ml-4'><item.icon /></span>
                        <p className='text-lg font-semibold'>{item.name}</p>
                    </li>
                </a>
            ))}
        </ul>
    )
}

export default SidebarItem