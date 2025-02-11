import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EditFormAuthor from "@/components/dashboard/author/EditFormAuthor";

const page = () => {
    return (
        <div className="p-10">
            <Card className="p-2 ">
                <CardHeader>
                    <CardTitle>Update Author</CardTitle>
                </CardHeader>
                <CardContent>
                    <EditFormAuthor />
                </CardContent>
            </Card>
        </div>
    );
};

export default page;
