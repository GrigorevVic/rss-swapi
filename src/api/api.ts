interface CharacterData {
  name: string;
}

const url = 'https://swapi-server.vercel.app/people';

export const getData = async (search: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  const result = await response.json();
  const searched = result.filter((item: CharacterData) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return searched;
};

export const getDataById = async (id: string) => {
  const response = await fetch(`${url}/${id}`);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  const result = await response.json();
  return result;
};
