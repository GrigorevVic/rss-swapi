import './styles.css';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { CardList } from '../../components/cardList/CardList';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Pagination } from '../../components/pagination/Pagination';
import { useSearchParams, Outlet } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { useGetCharactersQuery } from '../../api/api';
import { ThemeToggler } from '../../components/themeToggler/themeToggler';

export function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [savedSearch, setSavedSearch] = useLocalStorage();
  const { data, isError, isFetching } = useGetCharactersQuery({
    search: savedSearch,
    page: currentPage,
  });

  useEffect(() => {
    if (savedSearch) {
      setSearchParams(`?search=${savedSearch}&page=${currentPage}`);
    } else {
      setSearchParams(`?page=${currentPage}`);
    }
  }, [currentPage, savedSearch]);

  const handleSearch = (term: string) => {
    setSavedSearch(term);
    setCurrentPage(1);
  };

  if (isError) {
    return <p className="error">Error</p>;
  }
  const isDetails = Boolean(searchParams.get('details'));

  return (
    <>
      <Header />
      <ThemeToggler />
      <main className="main">
        <SearchForm handleSearch={handleSearch} />
        {!isFetching ? (
          <>
            <Pagination
              onPageChange={setCurrentPage}
              currentPage={currentPage}
              response={data}
            />
            <div className="wrapper">
              <CardList peopleList={data?.results} />
              {isDetails && <Outlet />}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </main>
      <Footer />
    </>
  );
}
