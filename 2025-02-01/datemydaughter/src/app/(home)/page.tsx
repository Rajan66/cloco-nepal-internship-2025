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
    }, []) // if we put applications in the dependency, it will cause maximum depth execeeded error

    /* Maximum update depth exceeded.
     * This can happen when a component calls setState inside useEffect,
     * but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render
     */

    // TODO Question Why does getting applications from the localStorage, trigger useEffect, if applications is set as a dependency

    return (
        <div className='h-screen'>
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
                            <Card key={index} application={application} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className='flex flex-col items-center justify-center gap-6 h-screen'>
                        <h2 className='text-xl'>Nothing here... go fill up an application</h2>
                        <a href="/application/form"><Button label='View form' /></a>
                    </div>)
            }

        </div >
    )
}

export default page