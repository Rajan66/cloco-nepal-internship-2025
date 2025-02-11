import React from "react";

import EditFormBook from "@/components/dashboard/book/EditFormBook";
import NewPage from "@/components/dashboard/NewPage";

const page = () => {
    return <NewPage Form={EditFormBook} url="/dashboard/book" title="Update Book" />;
};

export default page;
