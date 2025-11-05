import { Role } from "@/constants/role";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { IRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component:ComponentType, requiredRole?:IRole)=>{
    return function AuthWrapper(){

        const {data,isLoading}=useUserInfoQuery(undefined)

        if(!isLoading  && !data?.data?.email){
            return <Navigate to="/login"/>
        }

 if (!isLoading && requiredRole && data?.data?.role !== requiredRole && data?.data?.role !== Role.ADMIN) {
            return <Navigate to="/unauthorized" />;
 }

        return <Component/>;
    }
}