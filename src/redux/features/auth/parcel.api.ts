import { baseApi } from "@/redux/baseApi";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createParcel: builder.mutation({
      query: (parcelData) => ({
        url: "/parcels",
        method: "POST",
        data: parcelData,
      }),

    }),
    confirmParcel: builder.mutation({
      query: (id) => ({
        url: `parcels/confirm/${id}`,
        method: "PATCH",
      }),

    }),
    cancelParcel: builder.mutation({
      query: (id) => ({
        url: `parcels/cancel/${id}`,
        method: "PATCH",
      }),

    }),
    parcelStatus: builder.query({
      query: (id) => ({
        url: `parcels/${id}/status-log`,
        method: "GET",
        data: id,
        
      }),

    }),
    ParcelIncoming: builder.query({
      query: () => ({
        url: "/parcels/incoming",
        method: "GET",
      }),
    }),

    ParcelSent: builder.query({
      query: () => ({
        url: "/parcels/me",
        method: "GET",
      }),

    }),
   
 
   
    allParcel: builder.query({
      query: () => ({
        url: "parcels/admin/parcels",
        method: "GET",
      }),

    }),
    getStatusDistrubution: builder.query({
      query: () => ({
        url: "parcels/admin/status-distubution",
        method: "GET",
      }),

    }),
    getParcelOverview: builder.query({
      query: () => ({
        url: "parcels/admin/overview",
        method: "GET",
      }),

    }),
   
  }),
});

export const {
 useCreateParcelMutation,
  useParcelIncomingQuery,
  useConfirmParcelMutation,
  useParcelSentQuery,
  useCancelParcelMutation,
  useAllParcelQuery,
  useParcelStatusQuery,
  useGetParcelOverviewQuery,
  useGetStatusDistrubutionQuery
 
} = parcelApi;
