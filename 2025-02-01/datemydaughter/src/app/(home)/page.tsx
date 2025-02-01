"use client"
import Button from '@/components/common/Button';
import Card from '@/components/home/Card'
import { Loader2Icon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { TApplication } from '@/types/TApplication';

const page = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [applications, setApplications] = useState<TApplication[]>([]);

    useEffect(() => {
        const storedApps = localStorage.getItem("applications");
        if (storedApps) {
            setApplications(JSON.parse(storedApps));
        }
        setIsLoading(false);
    }, [applications])

    return (
        <div>
            {isLoading ? (
                <div className='flex justify-center items-center'>
                    <Loader2Icon />
                </div>
            ) : applications.length > 0 ?
                (
                    <div>
                        {applications.map((application: TApplication, index: number) => (
                            // TODO: Question I had to spread the object, do props not accept objects?
                            // <Card key={index} application={application} />
                            <Card key={index} {...application} />
                        ))}
                    </div>
                ) : (
                    <div >
                        <h2>Nothing here... go fill up an application</h2>
                        <a href="/application/form"><Button label='View form' /></a>
                    </div>)
            }

        </div >
    )
}

export default page