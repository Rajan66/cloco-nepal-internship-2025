import { AppSidebar } from "@/features/dashboard/components";
import Navbar from "@/components/common/header/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col w-full overflow-x-hidden">
        <div>
          <Navbar />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
