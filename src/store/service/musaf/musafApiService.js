import { baseApi } from "./../../api/baseApi";

const musafApiService = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addMusaf: build.mutation({
            query: (payload) => ({
                url: "musafs",
                method: "POST",
                body: payload,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: ["Musafs"],
        }),
        allMusaf: build.query({
            query: () => "musafs",
            providesTags: ["Musafs"],
        }),
        updateMusaf: build.mutation({
            query: (payload) => ({
                url: `musafs/${payload.id}`,
                method: "PATCH",
                body: payload?.data,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: ["Musafs"],
        }),
        deleteMusaf: build.mutation({
            query: (payload) => ({
                url: `musafs/${payload}`,
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: ["Musafs"],
        }),
    }),
    overrideExisting: false,
});

export const {
    useAddMusafMutation,
    useAllMusafQuery,
    useDeleteMusafMutation,
    useUpdateMusafMutation,
} = musafApiService;
