import React from "react";

import NewPage from "@/components/dashboard/NewPage";
import FormCustomer from "@/components/dashboard/customer/FormCustomer";

const page = () => {
    return (
        <NewPage
            url={`/dashboard/customer`}
            title="Create a New Customer"
            Form={FormCustomer}
        />
    );
};

export default page;
