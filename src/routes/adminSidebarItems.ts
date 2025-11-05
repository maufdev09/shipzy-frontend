import allParcel from "@/Page/Admin/AllParcel";
import allUser from "@/Page/Admin/AllUser";
import OverviewPage from "@/Page/Admin/OverviewPage";
import type { IsidevarItem } from "@/types";





export const adminSidebarItems:IsidevarItem[] = [
  {
    title: "Dashboard",

    items: [
      {
        title: "Overview",
        url: "/admin/overview",
        component: OverviewPage,
      },
    
      {
        title: "All Parcels",
        url: "/admin/all-parcel",
        component: allParcel,
      },
      {
        title: "All Users",
        url: "/admin/all-users",
        component: allUser,
      },
    ],
  },
];
