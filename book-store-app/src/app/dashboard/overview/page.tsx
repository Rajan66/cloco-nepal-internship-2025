"use client";
import React, { useState, useEffect } from "react";
import { Book, PenBoxIcon, User2Icon } from "lucide-react";

import {
  BookAuthorAreaChart,
  CategoryCard,
  CountPieChart,
  TopSellers,
  TopSellersSkeleton,
} from "@/features/dashboard/components";

const page = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto md:mx-8 py-10 flex flex-col gap-4  px-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <CategoryCard title="Books" Icon={Book} count={134} />
        </div>
        <div className="col-span-1">
          <CategoryCard title="Authors" Icon={PenBoxIcon} count={16} />
        </div>
        <div className="col-span-1">
          <CategoryCard title="Customers" Icon={User2Icon} count={67} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-2">
          <BookAuthorAreaChart />
        </div>
        <div className="grid row-span-1 col-span-3 md:col-span-1 gap-4 mr-4 md:mr-0">
          <div className="row-span-1 ">
            {loading ? <TopSellersSkeleton /> : <TopSellers />}
          </div>
          <div className="row-span-1 ">
            <CountPieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
