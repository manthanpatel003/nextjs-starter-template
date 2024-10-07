import { BASE_URL } from "@/config/config";
import { RootState } from "@/redux/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/user/`,
    prepareHeaders: (headers, { getState }) => {
      const { authToken } = (getState() as RootState).app.user;
      headers.set("Content-Type", "application/json");
      if (authToken) {
        headers.set("Authorization", `Bearer ${authToken}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    userSignup: builder.mutation({
      query: (data) => ({
        url: "signup",
        method: "POST",
        body: data,
      }),
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
    userMe: builder.mutation({
      query: () => ({
        url: "me",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useUserSignupMutation,
  useUserLoginMutation,
  useUserMeMutation,
} = userApi;
