import React from "react";

import { NewPage } from "@/features/dashboard/components";
import FormCustomer from "@/features/customer/components/FormCustomer";

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
