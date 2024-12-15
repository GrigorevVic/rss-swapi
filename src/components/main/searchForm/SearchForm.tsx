import './styles.css';
import { Component } from 'react';

interface SearchState {
  search: string;
}

interface SearchProps {
  handleSearch: (search: string) => void;
}

export class SearchForm extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    const savedSearch = localStorage.getItem('searchString') || '';
    this.state = {
      search: savedSearch,
    };
    this.props.handleSearch(this.state.search);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
    this.setState({ search: event.target.value.trim() });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    localStorage.setItem('searchString', this.state.search);
    this.props.handleSearch(this.state.search);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form" name="form">
        <input
          className="search-input"
          type="text"
          placeholder="Enter a character name..."
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    );
  }
}
