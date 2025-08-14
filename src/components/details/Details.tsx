'use client';

import './styles.css';
import { useGetCharacterByIdQuery } from '../../api/api';
import { Loader } from '../loader/Loader';
import { useRouter, useSearchParams } from 'next/navigation';

interface DetailsProps {
  id: string | undefined | string[];
}

export function Details({ id }: DetailsProps) {
  const { data, isFetching } = useGetCharacterByIdQuery({ id });
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const closeDetails = () => {
    const page = params.get('page');
    const search = params.get('search')
      ? `search=${params.get('search')}&`
      : '';
    router.push(`/?${search}page=${page}`, { scroll: false });
  };

  return (
    <>
      {!isFetching ? (
        <div className="card-details">
          <h2 className="name">{data.name}</h2>
          <div className="wrapper-img-details">
            <img className="img-details" src={`/${id}.jpg`} alt={data.name} />
          </div>
          <p className="height">Height: {data.height}</p>
          <p className="mass">Mass: {data.mass}</p>
          <p className="birth_year">Birth year: {data.birth_year}</p>
          <p className="gender">Gender: {data.gender}</p>
          <p className="skin_color">Skin color: {data.skin_color}</p>
          <p className="eye_color">Eye color: {data.eye_color}</p>
          <button className="btn" onClick={closeDetails}>
            Close
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
