"use client"
import React, { useEffect, useState } from 'react'
import { TFormProps } from '@/types/props/TFormProps'
import { TApplication } from '@/types/TApplication';
import Button from './Button';

const Form = ({ title, application, onSubmit }: TFormProps) => {
    const [formData, setFormData] = useState<TApplication>({
        name: '',
        email: '',
        address: '',
        phone: '',
        iq: '',
        essay: '',
    });

    // TODO Question: risks of using ! versus ? or ??
    useEffect(() => {
        if (application) {
            setFormData({
                name: application.name ?? '', // replaces null or undefined with empty string; if application.name is undefined, assign ''
                email: application.email ?? '',
                address: application.address ?? '',
                phone: application.phone ?? '',
                iq: application.iq ?? '',
                essay: application.essay ?? '',
            });
        }
    }, [application]);

    const submitForm = () => {
        onSubmit(formData);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-darkShade flex flex-col justify-center items-center px-10 py-8 gap-4 rounded-lg shadow-neutral-800 shadow-lg '>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-semibold text-gray-100">{title}</h2>
                </div>

                <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                    {["name", "email", "address", "phone", "iq"].map((field) => (
                        <div key={field} className="flex gap-4 items-center">
                            <label htmlFor={field} className="w-20 text-gray-100">
                                {field.charAt(0).toUpperCase() + field.slice(1)}*:
                            </label>
                            <input
                                placeholder={`Enter your ${field}...`}
                                onChange={handleChange}
                                name={field}
                                value={formData[field as keyof TApplication]} // controlled input
                                // if i put the key directly: {formData.name}, useState will try to initialize the field as empty string ''
                                // but if the application is undefined at first render, useEffect won't add the formData immediately
                                // useEffect only gets called after the first render,
                                className="w-[350px] bg-gray-100 text-gray-800 border p-2 rounded-md"
                            />
                        </div>
                    ))}

                    <div className="flex gap-4 items-start">
                        <label htmlFor="essay" className="w-20 text-gray-100">Essay*:</label>
                        <textarea
                            placeholder="Write at least 50 words to prove your love..."
                            onChange={handleChange}
                            name="essay"
                            value={formData.essay} // ✅ Ensures controlled input
                            className="w-[350px] min-h-[100px] bg-gray-100 text-gray-800 border p-2 rounded-md"
                        />
                    </div>

                    <Button label="Submit" onClick={submitForm} />
                </form>
            </div>
        </div>
    )
}

export default Form;
