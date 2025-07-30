import './styles.css';
import { useState } from 'react';

interface SearchProps {
  handleSearch: (search: string) => void;
}

export function SearchForm({ handleSearch }: SearchProps) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value.trim());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleSearch(inputValue);
  };

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
    </form>
  );
}
