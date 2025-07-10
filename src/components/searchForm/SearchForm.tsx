import './styles.css';
import { useState } from 'react';

interface SearchProps {
  handleSearch: (search: string) => void;
}

export function SearchForm({ handleSearch }: SearchProps) {
  const [hasError, setError] = useState({ hasError: false });
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value.trim());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleSearch(inputValue);
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
        value={inputValue}
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
