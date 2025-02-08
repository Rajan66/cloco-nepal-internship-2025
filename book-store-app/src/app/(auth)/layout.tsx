import React from "react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section className="">
            <div>
                {children}
            </div>
        </section>
    )
}