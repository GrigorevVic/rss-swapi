import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { People } from '../types/types';

const baseUrl = 'https://swapi-server.vercel.app/people';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getCharacters: build.query({
      query: () => {
        return ``;
      },
    }),
    getCharacterById: build.query({
      query: ({ id }) => `${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = api;

export const searched = (search: string, data: People[]) => {
  const searched = data.filter((item: People) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return searched;
};
