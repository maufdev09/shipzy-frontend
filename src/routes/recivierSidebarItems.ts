import ConfirmedParcel from "@/Page/reciver/ConfirmParcel";
import reciveParcel from "@/Page/reciver/reciveParcel";
import type { IsidevarItem } from "@/types";





export const receiverSidebarItems:IsidevarItem[] = [
  {
    title: "Recivier Dashboard",

    items: [
      {
        title: "Recivied Parcels",
        url: "/recivier/recived-parcels",
        component: reciveParcel,
      },
      {
        title: "Confirmed Parcels",
        url: "/recivier/confirmed-parcels",
        component: ConfirmedParcel,
      },
     

    ],
  },
];
