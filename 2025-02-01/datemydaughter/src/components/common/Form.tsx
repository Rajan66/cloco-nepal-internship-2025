"use client"
import React, { useState } from 'react'
import { TFormProps } from '@/types/props/TFormProps'
import { TApplication } from '@/types/TApplication';
import Button from './Button';

const Form = ({ title, application, onSubmit }: TFormProps) => {
    const [formData, setFormData] = useState<TApplication>({
        name: application?.name || '',
        email: application?.email || '',
        address: application?.address || '',
        phone: application?.phone || '',
        iq: application?.iq || '',
        essay: application?.essay || '',
    });

    const submitForm = () => {
        onSubmit(formData);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData, // spread the form data
            [e.target.name]: e.target.value // update the respective field
        })
    }
    return (
        <div className='flex justify-center items-center'>
            <div className='bg-darkShade flex flex-col justify-center  items-center px-10 py-8 gap-4 rounded-lg shadow-neutral-800 shadow-lg '>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-semibold text-gray-100">{title}</h2>
                </div>

                <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex gap-4 items-center">
                        <label htmlFor="name" className="w-20 text-gray-100">Name*:</label>
                        <input
                            placeholder="Enter your name"
                            onChange={handleChange}
                            name="name"
                            value={formData.name}
                            className="w-[350px] bg-gray-100 text-gray-800 border p-2 rounded-md"
                        />
                    </div>

                    <div className="flex gap-4 items-center">
                        <label htmlFor="email" className="w-20 text-gray-100">Email*:</label>
                        <input
                            placeholder="Enter your email"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            className="w-[350px] bg-gray-100 text-gray-800 border p-2 rounded-md"
                        />
                    </div>

                    <div className="flex gap-4 items-center">
                        <label htmlFor="address" className="w-20 text-gray-100">Address*:</label>
                        <input
                            placeholder="Enter your address"
                            onChange={handleChange}
                            name="address"
                            value={formData.address}
                            className="w-[350px] bg-gray-100 text-gray-800 border p-2 rounded-md"
                        />
                    </div>

                    <div className="flex gap-4 items-center">
                        <label htmlFor="phone" className="w-20 text-gray-100">Phone*:</label>
                        <input
                            placeholder="Enter your phone"
                            onChange={handleChange}
                            name="phone"
                            value={formData.phone}
                            className="w-[350px] bg-gray-100 text-gray-800 border p-2 rounded-md"
                        />
                    </div>

                    <div className="flex gap-4 items-center">
                        <label htmlFor="iq" className="w-20 text-gray-100">IQ*:</label>
                        <input
                            placeholder="Enter your iq"
                            onChange={handleChange}
                            name="iq"
                            value={formData.iq}
                            className="w-[350px] bg-gray-100 text-gray-800 border p-2 rounded-md"
                        />
                    </div>

                    <div className="flex gap-4 items-start ">
                        <label htmlFor="iq" className="w-20 text-gray-100">Essay*:</label>
                        <textarea
                            placeholder="Write at least 50 words to prove your love..."
                            onChange={handleChange}
                            name="essay"
                            value={formData.essay}
                            className="w-[350px] min-h-[100px] bg-gray-100 text-gray-800 border p-2 rounded-md"
                        />
                    </div>
                    <Button label="Submit" onClick={submitForm} />
                </form>
            </div>
        </div >
    )
}

export default Form