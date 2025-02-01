"use client"
import Form from '@/components/common/Form';
import { TApplication } from '@/types/TApplication';
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
    return (
        <div>
            <h2> Passed something:{id}</h2>
            <Form title='Edit Application' application={application} onSubmit={handleFormSubmit} />
        </div>
    )
}

export default page