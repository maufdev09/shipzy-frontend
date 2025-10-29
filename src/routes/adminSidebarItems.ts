import Analytics from "@/Page/Admin/analytics";
import type { IsidevarItem } from "@/types";





export const adminSidebarItems:IsidevarItem[] = [
  {
    title: "Dashboard",

    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
];
