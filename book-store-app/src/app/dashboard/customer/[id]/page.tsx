import React from "react";

import EditFormCustomer from "@/components/dashboard/customer/EditFormCustomer";
import NewPage from "@/components/dashboard/NewPage";

const page = () => {
    return (
        <NewPage
            Form={EditFormCustomer}
            url="/dashboard/customer"
            title="Update Customer"
        />
    );
};

export default page;
