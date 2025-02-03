import React from 'react'
import { contactItems } from './list/contactItems'

const ContactList = () => {
    return (
        <ul className='flex flex-col items-start gap-6'>
            {contactItems.map((item, index) => (
                <li key={index}>
                    {/* target=blank opens the link in new tab, really cool */}
                    <a href={item.url} target='_blank' className='hover:text-red-300'><span>{item.name}</span></a>
                </li>
            ))}
        </ul>
    )
}

export default ContactList