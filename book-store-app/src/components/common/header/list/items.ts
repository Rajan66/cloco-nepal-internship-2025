import { BookIcon, LayoutDashboard, User2, UserPen } from "lucide-react";

export const items = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Books",
    url: "/dashboard/book",
    icon: BookIcon,
  },
  {
    title: "Authors",
    url: "/dashboard/author",
    icon: UserPen,
  },
  {
    title: "Customers",
    url: "/dashboard/customer",
    icon: User2,
  },
];
