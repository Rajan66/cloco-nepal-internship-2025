import React from "react";

import { NewPage } from "@/features/dashboard/components";
import FormUser from "@/features/user/components/FormUser";

const page = () => {
  return (
    <div className="px-10 ">
      <NewPage
        url={`/dashboard/user`}
        title="Create a New User"
        Form={FormUser}
      />
    </div>
  );
};

export default page;
