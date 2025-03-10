import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type NewPageProps = {
  Form: React.ElementType;
  url: string;
  title: string;
};
const NewPage = ({ Form, url, title }: NewPageProps) => {
  return (
    <div className="px-10 py-4">
      <div className="pb-4 justify-between flex">
        <div></div>
        <Link href={url}>
          <Button>
            <ArrowLeft />
            Go Back
          </Button>
        </Link>
      </div>
      <Card className="p-2 ">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="bg-black">
          <Form />
        </CardContent>
      </Card>
    </div>
  );
};

export default NewPage;
