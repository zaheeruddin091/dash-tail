import { LayoutDashboard } from "lucide-react";

export const menusConfig = {
  mainNav: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
  ],
  sidebarNav: {
    modern: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
      },
    ],
    classic: [
      {
        isHeader: true,
        title: "menu",
      },
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
      },
    ],
  },
};
