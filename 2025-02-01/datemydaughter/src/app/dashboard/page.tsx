"use client"
import Button from '@/components/common/Button';
import { TApplication } from '@/types/TApplication';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Table from '@/components/common/Table';
import { tableHeads } from '@/components/dashboard/list/tableHeads';
import { toast } from 'react-toastify';

const page = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [applications, setApplications] = useState<TApplication[]>([]);

    useEffect(() => {
        const storedApps = localStorage.getItem("applications");
        if (storedApps) {
            setApplications(JSON.parse(storedApps));
        }
        setIsLoading(false);
    }, [])

    const deleteApplication = (index: number) => {
        const storedApplications = JSON.parse(localStorage.getItem("applications") || "[]");
        storedApplications.splice(index, 1); // start at `index` and remove 1 element

        localStorage.setItem("applications", JSON.stringify(storedApplications));
        setApplications(storedApplications);
        toast.success("Application deleted succesfully", { autoClose: 2000 })
    };


    return (
        <div className='p-10 w-full gap-6 flex flex-col'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Applications</h2>
                <div onClick={() => router.push('/application/form')}>
                    <Button label='Add application' />
                </div>
            </div>
            <Table isLoading={isLoading} heading={tableHeads} datas={applications} editUrl='dashboard/application' onDelete={deleteApplication} />
        </div>
    )
}

export default page