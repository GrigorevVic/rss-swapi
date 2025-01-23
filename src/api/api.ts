const url = 'https://swapi.dev/api';

export const getData = async (search: string) => {
  const response = await fetch(`${url}/people/?search=${search}`);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  const result = await response.json();
  return result.results;
};
