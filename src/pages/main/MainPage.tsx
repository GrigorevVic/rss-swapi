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
import { useGetCharactersQuery, searched } from '../../api/api';
import { ThemeToggler } from '../../components/themeToggler/themeToggler';
import { People } from '../../types/types';

export function MainPage() {
  const [response, setResponse] = useState<People[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [savedSearch, setSavedSearch] = useLocalStorage();
  const { data, isError, isFetching } = useGetCharactersQuery({});

  const handleSearch = async (search: string) => {
    const queryString = search
      ? `?page=${currentPage}&search=${search}`
      : `?page=${currentPage}`;
    setSearchParams(queryString);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (search: string) => {
    setCurrentPage(1);
    setSavedSearch(search);
  };

  useEffect(() => {
    handleSearch(savedSearch);
    if (!isFetching) {
      const filtredData = searched(savedSearch, data);
      setResponse(filtredData);
    }
  }, [savedSearch, currentPage, isFetching]);

  if (isError) {
    return <p className="error">Error</p>;
  }
  const isDetails = Boolean(searchParams.get('details'));

  const filtred = response?.filter((_item, index) => {
    return Math.ceil(Number(index + 1) / 10) === currentPage;
  });

  return (
    <>
      <Header />
      <ThemeToggler />
      <main className="main">
        <SearchForm handleSearch={handleSearchChange} />
        {!isFetching && response ? (
          <>
            <Pagination
              onPageChange={handlePageChange}
              peopleNumber={response.length}
              currentPage={currentPage}
            />
            <div className="wrapper">
              <CardList peopleList={filtred} />
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
