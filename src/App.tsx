import './App.css';
import { Component } from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { SearchForm } from './components/main/searchForm/SearchForm';
import { CardList } from './components/main/cardList/CardList';
import { getData } from './api/api';
import { People } from './types/typs';

export interface ComponentState {
  isLoading: boolean;
  results: People[];
}

export class App extends Component<object, ComponentState> {
  constructor(props: object) {
    super(props);

    this.state = {
      results: [],
      isLoading: false,
    };
  }

  handleSearch = async (search: string) => {
    this.setState({ isLoading: true });
    const response = await getData(search);
    this.setState({ results: response });
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <>
        <Header />
        <main className="main">
          <SearchForm handleSearch={this.handleSearch} />
          <CardList peopleList={this.state.results} />
        </main>
        <Footer />
      </>
    );
  }
}
