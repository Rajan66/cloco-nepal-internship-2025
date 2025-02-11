import React from "react";

import FormAuthor from "@/components/dashboard/author/FormAuthor";
import NewPage from "@/components/dashboard/NewPage";

const page = () => {
    return (
        <NewPage url={`/dashbord/author`} title="Create a New Author" Form={FormAuthor} />
    );
};

export default page;
