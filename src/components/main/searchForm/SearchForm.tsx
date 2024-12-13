import { Component } from 'react';

interface SearchFormState {
  search: string;
}

interface SearchFormProps {
  handleSearch: (search: string) => void;
}

export class SearchForm extends Component<SearchFormProps, SearchFormState> {
  constructor(props: SearchFormProps) {
    super(props);

    this.state = {
      // searchTerm: getItemFromLocalStorage<string>("searchTerm") ?? "",
      search: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
    this.setState({ search: event.target.value.trim() });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    //setItemToLocalStorage('searchTerm', this.state.searchTerm);
    this.props.handleSearch(this.state.search);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form" name="form">
        <input
          className="search-input"
          type="text"
          placeholder=""
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
