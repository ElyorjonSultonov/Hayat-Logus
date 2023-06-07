import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/base_url";

export const arrivalApi = createApi({
  reducerPath: "arrivalsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
     arrivals: builder.query({
     query: () => "/logus/expected-arrival"
  }),
//   addTask: builder.mutation({
//     query: (arrival) => ({
//       url: "/",
//       method: "POST",
//       body: arrival
//     })
//   }),
//   updateTask: builder.mutation({
//     query: ({ id, ...rest }) => ({
//       url: `/tasks/${id}`,
//       method: "PUT",
//       body: rest
//     })
//   }),
//   deleteTask: builder.mutation({
//     query: (id) => ({
//       url: `/tasks/${id}`,
//       method: "DELETE"
//     })
//   })
  })
});

export const {
  useArrivalsQuery,
//   useAddTaskMutation,
//   useUpdateTaskMutation,
//   useDeleteTaskMutation
} = arrivalApi;