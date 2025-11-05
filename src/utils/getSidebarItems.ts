import { Role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { receiverSidebarItems } from "@/routes/recivierSidebarItems";
import { senderSidebarItems } from "@/routes/senderSidebarItems";
import type { IRole } from "@/types";


export  function getSidebarItems(userRole: IRole) {


    
    switch (userRole) {
    case Role.ADMIN:
        return[...adminSidebarItems,...senderSidebarItems,...receiverSidebarItems]
    case Role.RECEIVER:
        return[...receiverSidebarItems]
    case Role.SENDER:
        return[...senderSidebarItems]

    default:
        return[]
}
    
}
