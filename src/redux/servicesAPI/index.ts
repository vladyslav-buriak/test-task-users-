import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../config";
import { IAlbum, IPost, IUser } from "../../types/types";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], string>({
      query: () => `users`,
    }),
    getPost: builder.query<IPost[], string>({
      query: (postId: string) => `posts/${postId}/comments`,
    }),
    getAlbums: builder.query<IAlbum[], string>({
      query: (id: string) => `photos?albumId=${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetPostQuery, useGetAlbumsQuery } =
  serviceApi;
