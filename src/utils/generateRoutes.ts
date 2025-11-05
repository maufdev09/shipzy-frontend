import type { IsidevarItem } from "@/types";


export const generateRoutes=(sidebarItems:IsidevarItem[])=>{

     return sidebarItems.flatMap(section => section.items.map(route=> ({
        path: route.url,
        Component: route.component,
    })  ))
}