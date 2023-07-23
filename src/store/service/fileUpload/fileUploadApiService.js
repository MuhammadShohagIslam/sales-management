import { baseApi } from "../../api/baseApi";

const fileUploadApiService = baseApi.injectEndpoints({
    endpoints: (build) => ({
        imageUpload: build.mutation({
            query: (payload) => ({
                url: "uploads/image",
                method: "POST",
                body: payload
            }),
        }),
        pdfUpload: build.mutation({
            query: (payload) => ({
                url: "uploads/files",
                method: "POST",
                body: payload
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useImageUploadMutation, usePdfUploadMutation } =
    fileUploadApiService;
