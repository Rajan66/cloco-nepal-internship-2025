import React from "react";

import FormBook from "@/components/dashboard/book/FormBook";
import NewPage from "@/components/dashboard/NewPage";

const page = () => {
    return <NewPage url={`/dashboard/book`} title="Create a New Book" Form={FormBook} />;
};

export default page;
