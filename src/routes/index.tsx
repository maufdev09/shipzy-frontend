import App from "@/App";
import DashboardLayout from "@/components/LayOut/DashboardLayout";
import Analytics from "@/Page/Admin/analytics";
import Home from "@/Page/Home";
import Login from "@/Page/Login";
import Register from "@/Page/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            Component:App,
            children:[
                {
                    Component:Home,
                    index:true
                }
            ]
        },

        {
            Component:DashboardLayout,
            path:"/admin",
            children:[{
                Component:Analytics,
                path:"analytics"

            }]
        },
        {
            Component:DashboardLayout,
            path:"/user",
            children:[{
                Component:Analytics,
                path:"analytics"

            }]
        },
        {
            Component:Login,
            path:"/login"
        },
        {
            Component:Register,
            path:"/register"
        }
    ]
)