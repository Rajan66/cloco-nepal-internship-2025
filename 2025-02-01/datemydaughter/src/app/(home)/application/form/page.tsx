"use client"

import Form from '@/components/common/Form'
import { TApplication } from '@/types/TApplication';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    const [applications, setApplications] = useState<TApplication[]>([]);
    const router = useRouter();

    const handleFormSubmit = (data: TApplication) => {
        setApplications((prevApps) => [...prevApps, data]);

        const applicationList = JSON.parse(localStorage.getItem("applications") || "[]");
        applicationList.push(data);

        localStorage.setItem("applications", JSON.stringify(applicationList));
        router.push('/')
    }

    return (
        <div className='my-10'>
            <Form title='Create an Application' onSubmit={handleFormSubmit} />
        </div>
    )
}

export default page