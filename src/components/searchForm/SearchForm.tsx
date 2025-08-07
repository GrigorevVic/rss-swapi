import './styles.css';
import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface SearchProps {
  handleSearch: (search: string) => void;
}

export function SearchForm(props: SearchProps) {
  const [term, setTerm] = useState('');
  const [hasError, setError] = useState({ hasError: false });
  const [, setSavedSearch] = useLocalStorage();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(event.target.value.trim());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.handleSearch(term);
    setSavedSearch(term);
    setTerm('');
  };

  const getError = () => {
    setError({ hasError: true });
  };

  if (hasError.hasError) {
    throw new Error('An error has occurred');
  }
  return (
    <form onSubmit={handleSubmit} className="search-form" name="form">
      <input
        className="search-input"
        type="text"
        placeholder="Enter a character name..."
        value={term}
        onChange={handleChange}
      />
      <button type="submit" className="btn">
        Search
      </button>
      <button type="submit" className="btn" onClick={getError}>
        Error
      </button>
    </form>
  );
}
