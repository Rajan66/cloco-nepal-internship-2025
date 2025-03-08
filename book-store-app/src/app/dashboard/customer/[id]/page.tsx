import React from "react";

import EditFormCustomer from "@/features/customer/components/EditFormCustomer";
import { NewPage } from "@/features/dashboard/components";

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
