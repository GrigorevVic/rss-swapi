import './App.css';
import { Component } from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Main } from './components/main/Main';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
