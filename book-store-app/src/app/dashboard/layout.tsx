import AppSidebar from "@/components/common/AppSidebar";
import Navbar from "@/components/common/header/Navbar";
import { SidebarProvider, } from "@/components/ui/sidebar";
import React from "react";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-col w-full">
                <div>
                    <Navbar />
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}