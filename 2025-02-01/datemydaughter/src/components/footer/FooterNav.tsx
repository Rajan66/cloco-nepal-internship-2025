import React from 'react'
import { footerLists } from './list/footerNavItems'

const FooterItem = () => {
    return (
        <ul className='flex flex-col items-start gap-6'>
            {footerLists.map((item, index) => (
                <li key={index}>
                    <a href={item.url} className='hover:text-red-300'><span>{item.name}</span></a>
                </li>
            ))}
        </ul>
    )
}

export default FooterItem