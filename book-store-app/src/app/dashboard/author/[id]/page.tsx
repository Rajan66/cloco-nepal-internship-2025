import React from "react";

import EditFormAuthor from "@/components/dashboard/author/EditFormAuthor";
import NewPage from "@/components/dashboard/NewPage";

const page = () => {
    return (
        <NewPage Form={EditFormAuthor} url="/dashboard/author" title="Update Author" />
    );
};

export default page;
