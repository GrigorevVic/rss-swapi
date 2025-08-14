'use client';

import { SearchForm } from '../searchForm/SearchForm';
import { CardList } from '../cardList/CardList';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Pagination } from '../pagination/Pagination';
import { Loader } from '../loader/Loader';
import { useGetCharactersQuery } from '../../api/api';
import { useRouter, useSearchParams } from 'next/navigation';
import { Details } from '../details/Details';

export function Main() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [savedSearch, setSavedSearch] = useLocalStorage();
  const { data, isError, isFetching } = useGetCharactersQuery({
    search: savedSearch,
    page: currentPage,
  });

  useEffect(() => {
    const search = savedSearch ? `search=${savedSearch}&` : '';
    const page = `page=${currentPage}`;
    router.push(`/?${search}${page}`, { scroll: false });
  }, [savedSearch, currentPage]);

  const handleSearch = (term: string) => {
    setSavedSearch(term);
    setCurrentPage(1);
  };

  const params = new URLSearchParams(searchParams.toString());
  const details = params.get('details');

  if (isError) {
    return <p className="error">Error</p>;
  }

  return (
    <>
      <main className="main">
        {<SearchForm handleSearch={handleSearch} />}
        {!isFetching ? (
          <>
            <Pagination
              onPageChange={setCurrentPage}
              currentPage={currentPage}
              response={data}
            />
            <div className="wrapper">
              <CardList peopleList={data?.results} />
              {details && <Details id={details} />}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
}
