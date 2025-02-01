import { TCardProps } from '@/types/props/TCardProps'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const Card = ({ application, index }: TCardProps) => {
    return (
        <div>
            <div className='flex justify-between px-10 py-6 bg-darkShade m-10 rounded-2xl shadow-neutral-700 shadow-md'>
                <div className='flex flex-col gap-4'>
                    <p className='flex gap-6'>
                        <span className='w-14'>Name:</span>
                        <span>{application.name}</span>
                    </p>
                    <p className='flex gap-6'>
                        <span className='w-14'>Email:</span>
                        <span>{application.email}</span>
                    </p>
                    <p className='flex gap-6'>
                        <span className='w-14'>Address:</span>
                        <span>{application.address}</span>
                    </p>
                </div>
                <div className='flex flex-col gap-4 w-1/4  items-end'>
                    <p className='flex gap-2 '>
                        <span className=''>Contact:</span>
                        <span>{application.phone}</span>
                    </p>
                    <p className='flex gap-2 '>
                        <span className=''>IQ:</span>
                        <span>{application.iq}</span>
                    </p>
                    <a href={`/application/${index}`} className='flex gap-1 items-center hover:text-red-300 cursor-pointer'>
                        <span>View Essay </span>
                        <span><ArrowRightIcon className='w-5 h-5' /></span>
                    </a>
                </div>
            </div >
        </div>
    )
}

export default Card