
import createParcel from "@/Page/sender/createParcel";
import senderParcel from "@/Page/sender/senderParcel";
import type { IsidevarItem } from "@/types";





export const senderSidebarItems:IsidevarItem[] = [
  {
    title: "Sender Dashboard",

    items: [
      {
        title: "Create Parcel",
        url: "/sender/create-parcel",
        component: createParcel,
      },
     
      {
        title: "Sent Parcel",
        url: "/sender/sent-parcel",
        component: senderParcel,
      },
     
    ],
  },
];
