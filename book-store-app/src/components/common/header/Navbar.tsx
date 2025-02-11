import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import ThemeToggle from "../ThemeToggle";
import DropdownProfile from "../../dashboard/DropdownProfile";
import { Breadcrumbs } from "../Breadcrumbs";
import { Separator } from "@/components/ui/separator";

type TUser = {
    name: string | null | undefined;
    email: string;
};

const Navbar = () => {
    // dummy type and name, replace with username when auth is implemented
    const user: TUser = {
        name: "Rajan",
        email: "rajanmaharjan042@gmail.com",
    };

    return (
        <header className="w-full top-0 bg-dark border-b-[2px] border-neutral-700">
            <nav className=" flex justify-between items-center p-4">
                <div className="flex gap-2 justify-center items-center">
                    <SidebarTrigger className="" />
                    <Separator orientation="vertical" className="mr-2 h-4"/> 
                    <Breadcrumbs />
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <DropdownProfile user={user} />
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
