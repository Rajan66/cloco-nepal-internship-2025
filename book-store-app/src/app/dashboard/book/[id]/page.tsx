import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EditFormBook from "@/components/dashboard/book/EditFormBook";

const page = () => {
    return (
        <div className="p-10">
            <Card className="p-2 ">
                <CardHeader>
                    <CardTitle>Update Author</CardTitle>
                </CardHeader>
                <CardContent>
                    <EditFormBook />
                </CardContent>
            </Card>
        </div>
    );
};

export default page;
