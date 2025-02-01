"use client"
import Form from '@/components/common/Form';
import { TApplication } from '@/types/TApplication';
import { Croissant } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const { id: id } = useParams();
    const router = useRouter();
    const [applications, setApplications] = useState<TApplication[]>([]);
    const [application, setApplication] = useState<TApplication>();


    useEffect(() => {
        const storedApps: TApplication[] = JSON.parse(localStorage.getItem("applications") || "[]");
        const foundApp = storedApps[Number(id)] || null;
        setApplications(storedApps);
        setApplication(foundApp);
    }, [id])


    const handleFormSubmit = (data: TApplication) => {
        const updatedApps = [...applications];
        updatedApps[Number(id)] = data;

        setApplications(updatedApps);
        localStorage.setItem("applications", JSON.stringify(updatedApps));

        router.push('/dashboard');
    };

    if (!application) {
        return (
            <div className='flex flex-col w-full h-screen items-center justify-center gap-10'>
                <Croissant className='text-pink-600 opacity-90 size-32' />
                <p className='text-xl text-pink-600 opacity-90'>Eh... what are you looking for? A Croissant?</p>
            </div>
        )
    }

    return (
        <div className='flex'>
            <div className='bg-darkShade w-full flex flex-col justify-center items-start p-6 m-10 gap-10 rounded-2xl'>
                {application ? (
                    Object.entries(application).map(([key, value], index) => (
                        <div key={index} className='flex gap-10'>
                            <label className='capitalize w-[100px] '>{key}:</label>
                            <p>{value}</p>
                        </div>
                    ))
                ) : (
                    <div></div>
                )}

            </div>
        </div>
    )
}

export default page