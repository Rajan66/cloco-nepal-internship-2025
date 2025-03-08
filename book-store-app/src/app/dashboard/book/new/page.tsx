import React from "react";

import FormBook from "@/features/book/components/FormBook";
import { NewPage } from "@/features/dashboard/components";

const page = () => {
  return (
    <NewPage
      url={`/dashboard/book`}
      title="Create a New Book"
      Form={FormBook}
    />
  );
};

export default page;
