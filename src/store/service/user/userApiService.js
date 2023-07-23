import { baseApi } from "../../api/baseApi";

const userApiService = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (payload) => ({
        url: "user",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    userLogin: build.mutation({
      query: (payload) => ({
        url: `auth/login-user/`,
        method: "POST",
        body: payload,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateUserMutation, useUserLoginMutation } = userApiService;
