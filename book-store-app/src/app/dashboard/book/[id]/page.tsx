import React from "react";

import EditFormBook from "@/features/book/components/EditFormBook";
import { NewPage } from "@/features/dashboard/components";

const page = () => {
  return (
    <NewPage Form={EditFormBook} url="/dashboard/book" title="Update Book" />
  );
};

export default page;
