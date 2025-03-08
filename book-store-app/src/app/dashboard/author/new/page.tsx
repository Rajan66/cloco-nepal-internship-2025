import React from "react";

import FormAuthor from "@/features/author/components/FormAuthor";
import { NewPage } from "@/features/dashboard/components";

const page = () => {
  return (
    <NewPage
      url={`/dashboard/author`}
      title="Create a New Author"
      Form={FormAuthor}
    />
  );
};

export default page;
