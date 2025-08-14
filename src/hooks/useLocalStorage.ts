import { useEffect, useState } from 'react';

export function useLocalStorage(): [string, (search: string) => void] {
  const [savedSearch, setValue] = useState('');

  useEffect(() => {
    const storedSearch = localStorage.getItem('searchString') || '';
    setValue(storedSearch);
  }, []);

  const setSavedSearch = (searchString: string) => {
    localStorage.setItem('searchString', searchString);
    setValue(searchString);
  };

  return [savedSearch, setSavedSearch];
}
