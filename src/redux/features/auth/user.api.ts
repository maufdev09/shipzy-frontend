import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
//     register: builder.mutation({
//       query: (userInfo) => ({
//         url: "/user/register",
//         method: "POST",
//         data: userInfo,
//       }),
// 
//     }),
//  
    updateUser: builder.mutation({
      query: ({id,data}) => ({
        url: `/user/${id}`,
        method: "PATCH",
        data:data
        
      }),

    }),
//  
    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),

    getAllusers: builder.query({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
      }),
    }),
   getAllReceivers: builder.query({
      query: () => ({
        url: "/user/all-receivers",
        method: "GET",
      }),
    }),
   

   

  }),
});

export const {
  
  useUserInfoQuery,
  useGetAllusersQuery,
  useGetAllReceiversQuery,
  useUpdateUserMutation
  
} = userApi;
