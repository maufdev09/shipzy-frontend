import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItem";
import type { IRole } from "@/types";


export  function getSidebarItems(userRole: IRole) {
    switch (userRole) {
    case role.superAdmin:
        return[...adminSidebarItems,...userSidebarItems]
    case role.admin:
        return[...adminSidebarItems]
    case role.user:
        return[...userSidebarItems]

    default:
        return[]
}
    
}
