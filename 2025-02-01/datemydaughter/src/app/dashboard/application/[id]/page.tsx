"use client"
import Form from '@/components/common/Form';
import { TApplication } from '@/types/TApplication';
import { time } from 'console';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

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

        toast.success("Application updated succesfully", { autoClose: 2000 })
        router.push('/dashboard');
    };
    return (
        <div className='flex flex-col justify-center items-start m-10'>
            <Form title='Edit Application' application={application} onSubmit={handleFormSubmit} />
        </div>
    )
}

export default page