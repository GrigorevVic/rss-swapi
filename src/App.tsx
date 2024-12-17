import './App.css';
import { Component } from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Main } from './components/main/Main';
import { ErrorBoundary } from './components/ErrorBoundary';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
        <Footer />
      </>
    );
  }
}
