import React from "react";

import EditFormUser from "@/features/user/components/EditFormUser";
import { NewPage } from "@/features/dashboard/components";

const page = () => {
  return (
    <NewPage Form={EditFormUser} url="/dashboard/user" title="Update User" />
  );
};

export default page;
