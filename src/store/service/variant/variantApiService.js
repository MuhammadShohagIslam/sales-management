import { baseApi } from "./../../api/baseApi";

const variantApiService = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addVariant: build.mutation({
            query: (payload) => ({
                url: "variants",
                method: "POST",
                body: payload,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: ["Variants"],
        }),
        addVariantSimple: build.mutation({
            query: (payload) => ({
                url: "variants/create-variant-simple",
                method: "POST",
                body: payload,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: ["Variants"],
        }),
        allVariant: build.query({
            query: () => `variants`,
            providesTags: ["Variants"],
        }),
        allVariantBasedLanguage: build.query({
            query: ({ language }) =>
                `variants?searchTerm=${language}`,
            providesTags: ["Variants"],
        }),
        allVariantBasedQuery: build.query({
            query: ({ language, chapter }) =>
                `variants?language=${language}&chapter=${chapter}`,
            providesTags: ["Variants"],
        }),
        updateVariant: build.mutation({
            query: (payload) => ({
                url: `variants/${payload.id}`,
                method: "PATCH",
                body: payload.data,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: ["Variants"],
        }),
        deleteVariant: build.mutation({
            query: (payload) => ({
                url: `variants/${payload}`,
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: ["Variants"],
        }),
    }),
    overrideExisting: false,
});

export const {
    useAddVariantMutation,
    useAddVariantSimpleMutation,
    useAllVariantQuery,
    useAllVariantBasedQueryQuery,
    useAllVariantBasedLanguageQuery,
    useUpdateVariantMutation,
    useDeleteVariantMutation
} = variantApiService;
