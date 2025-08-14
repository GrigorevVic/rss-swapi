import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://swapi.py4e.com/api/people';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getCharacters: build.query({
      query: ({ page = 1, search }) => {
        const queryString = search
          ? `search=${search}&page=${String(page)}`
          : `page=${String(page)}`;
        return `?${queryString}`;
      },
    }),
    getCharacterById: build.query({
      query: ({ id }) => `${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = api;
