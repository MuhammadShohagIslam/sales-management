import { baseApi } from "./../../api/baseApi";

const surahInfoApiService = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addSurahInfo: build.mutation({
            query: (payload) => ({
                url: "surah-infos",
                method: "POST",
                body: payload,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: ["SurahInfos"],
        }),
        allSurahInfo: build.query({
            query: () => `surah-infos`,
            providesTags: ["SurahInfos"],
        }),
        allSurahInfoBasedQuery: build.query({
            query: ({ name, chapter }) =>
                `surah-infos?name=${name}&chapter=${chapter}`,
            providesTags: ["SurahInfos"],
        }),
        updateSurahInfo: build.mutation({
            query: (payload) => ({
                url: `surah-infos/${payload.id}`,
                method: "PATCH",
                body: payload.data,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: ["SurahInfos"],
        }),
        deleteSurahInfo: build.mutation({
            query: (payload) => ({
                url: `surah-infos/${payload}`,
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: ["SurahInfos"],
        }),
    }),
    overrideExisting: false,
});

export const {
    useAllSurahInfoQuery,
    useAllSurahInfoBasedQueryQuery,
    useAddSurahInfoMutation,
    useDeleteSurahInfoMutation,
    useUpdateSurahInfoMutation
} = surahInfoApiService;
