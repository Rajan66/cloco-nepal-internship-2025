import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import logo from '@/app/favicon.ico'
import { Button } from "../ui/button"
import { items } from '../common/header/list/items';

export default function AppSidebar() {

    return (
        <Sidebar>
            <SidebarHeader className="flex gap-4 flex-row items-center">
                <Image src={logo} width={60} height={60} alt="BookStore_logo" />
                <h2 className="text-heading">BookStore</h2>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className="mt-6">
                        <SidebarMenu className="gap-4">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="text-base" >
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="my-4">
                <Button>Logout</Button>
            </SidebarFooter>
        </Sidebar>
    )
}
