import React from "react";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section>
            {/* TODO sidebar goes here */}
            dashboard
            {children}
        </section>
    )
}