import './styles.css';
import { SearchForm } from '../../components/searchForm/SearchForm';
import { People } from '../../types/types';
import { CardList } from '../../components/cardList/CardList';
import { getData } from '../../api/api';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Pagination } from '../../components/pagination/Pagination';
import { useSearchParams, Outlet } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';

export function MainPage() {
  const [response, setResponse] = useState<People[]>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [{ errorMsg }, setErrorMsg] = useState({ errorMsg: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [savedSearch, setSavedSearch] = useLocalStorage();

  const handleSearch = async (search: string) => {
    const queryString = search
      ? `?page=${currentPage}&search=${search}`
      : `?page=${currentPage}`;
    setSearchParams(queryString);
    setIsLoading(false);
    try {
      const response = await getData(search);
      setResponse(response);
      setIsLoading(true);
    } catch (e) {
      setErrorMsg({ errorMsg: (e as Error).message });
    } finally {
      setIsLoading(true);
    }
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
  }, [savedSearch, currentPage]);

  if (errorMsg) {
    return <p className="error">Error:{errorMsg}</p>;
  }

  const params = Boolean(searchParams.get('details'));

  const filtred = response?.filter((item, index) => {
    return Math.ceil(Number(index + 1) / 10) === currentPage;
  });

  return (
    <>
      <Header />
      <main className="main">
        <SearchForm handleSearch={handleSearchChange} />
        {isLoading && response ? (
          <>
            <Pagination
              onPageChange={handlePageChange}
              pageNumber={response.length}
              currentPage={currentPage}
            />
            <div className="wrapper">
              <CardList peopleList={filtred} />
              {params && <Outlet />}
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
