import { Component } from 'react';
import { SearchForm } from './searchForm/SearchForm';
import { CardList } from './cardList/CardList';
import { getData } from '../../api/api';
import { People } from '../../types/types';

export interface ComponentState {
  isLoading: boolean;
  results: People[];
  errorMessage: string;
}

export class Main extends Component<object, ComponentState> {
  constructor(props: object) {
    super(props);

    this.state = {
      results: [],
      isLoading: false,
      errorMessage: '',
    };
  }

  handleSearch = async (search: string) => {
    try {
      this.setState({ isLoading: true });
      const response = await getData(search);
      this.setState({ results: response });
    } catch (e) {
      this.setState({
        errorMessage: (e as Error).message,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading, errorMessage } = this.state;
    const isResults = this.state.results.length === 0 ? false : true;
    if (errorMessage) {
      return <p className="error">Error: {errorMessage}</p>;
    }
    return (
      <main className="main">
        <SearchForm handleSearch={this.handleSearch} />
        {isLoading ? (
          <div className="loader-container">
            <div className="loader" />
          </div>
        ) : isResults ? (
          <CardList peopleList={this.state.results} />
        ) : (
          <p className="no-results">Nothing found for your request</p>
        )}
      </main>
    );
  }
}
