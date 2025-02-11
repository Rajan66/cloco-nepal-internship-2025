"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import Loading from "@/components/common/Loading";

const page = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/dashboard/overview");
    }, [router]);

    return (
        <div>
            <Loading />
        </div>
    );
};

export default page;
