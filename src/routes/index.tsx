import App from "@/App";
import DashboardLayout from "@/components/LayOut/DashboardLayout";
import Home from "@/Page/Home";
import Login from "@/Page/Login";
import Register from "@/Page/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { senderSidebarItems } from "./senderSidebarItems";
import { receiverSidebarItems } from "./recivierSidebarItems";
import unauthorizedPages from "@/Page/unauthorizedPages";
import { withAuth } from "@/utils/withAuth";
import { Role } from "@/constants/role";
import type { IRole } from "@/types";
import AboutUs from "@/Page/AboutUs";
import { ContactUS } from "@/components/LayOut/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        Component: Home,
        index: true,
      },
      {
        Component: AboutUs,
        path:"/about"
      },
      {
        Component: ContactUS,
        path:"/Contact-Us"
      },
    ],
  },

  {
    Component: withAuth( DashboardLayout , Role.ADMIN as IRole),
    path: "/admin",
    children: [
      {
        index: true,
        element: <Navigate to="analytics" />,
      },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth( DashboardLayout , Role.SENDER as IRole),
    path: "/sender",
    children: [
      {
        index: true,
        element: <Navigate to="create-parcel" />,
      },
      ...generateRoutes(senderSidebarItems),
    ],
  },
  {
    Component: withAuth( DashboardLayout , Role.RECEIVER as IRole),
    path: "/recivier",
    children: [
      {
        index: true,
        element: <Navigate to="recived-parcels" />,
      },
      ...generateRoutes(receiverSidebarItems),
    ],
  },
  {
    Component: DashboardLayout,
    path: "/user",
    children: [
      
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: unauthorizedPages,
    path: "/unauthorized",
  },
  {
    Component: Register,
    path: "/register",
  },
]);
