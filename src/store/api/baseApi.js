import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.proggamoyquran.com/api/v1`,
    }),
    endpoints: () => ({}),
    tagTypes: ["Musafs", "Variants", "SurahInfos"],
});
