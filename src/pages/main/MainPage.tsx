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
  const [currentPage, setCurrentPage] = useState('1');

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
    setCurrentPage(String(page));
  };

  const [savedSearch] = useLocalStorage();

  useEffect(() => {
    const search = searchParams.get('search');
    const page = searchParams.get('page') ?? '1';
    console.log(page, search, '****************************');
    // setCurrentPage(page);
    handleSearch(savedSearch);
  }, [savedSearch, currentPage]);

  if (errorMsg) {
    return <p className="error">Error:{errorMsg}</p>;
  }

  const params = Boolean(searchParams.get('details'));

  console.log(currentPage);

  return (
    <>
      <Header />
      <main className="main">
        <SearchForm handleSearch={handleSearch} />
        {isLoading && response ? (
          <>
            <Pagination
              onPageChange={handlePageChange}
              pageNumber={response.length}
              currentPage={currentPage}
            />
            <div className="wrapper">
              <CardList peopleList={response} />
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
