import React from "react";

import EditFormAuthor from "@/features/author/components/EditFormAuthor";
import { NewPage } from "@/features/dashboard/components";

const page = () => {
  return (
    <NewPage
      Form={EditFormAuthor}
      url="/dashboard/author"
      title="Update Author"
    />
  );
};

export default page;
