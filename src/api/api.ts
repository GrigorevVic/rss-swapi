import { People } from '../types/types';

const url = 'http://localhost:3000';

export const getData = async (search: string) => {
  const uri = search
    ? `${url}/people?search=${search}`
    : `${url}/people?_start=10&_limit=10`;
  const response = await fetch(uri);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  const result = await response.json();
  const filtred = result.filter((item: People) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return filtred;
};

/*
const url = 'https://swapi.py4e.com/api';

export const getData = async (search: string) => {
  const response = await fetch(`${url}/people/?search=${search}`);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  const result = await response.json();
  console.log(result.results);
  return result.results;
};
*/
