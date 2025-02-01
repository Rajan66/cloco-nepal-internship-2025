import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="h-screen">
            <div className="h-full flex">
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
        </section>
    );
}
