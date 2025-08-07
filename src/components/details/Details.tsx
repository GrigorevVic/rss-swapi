import './styles.css';
import { useSearchParams, useLocation } from 'react-router-dom';
import { People } from '../../types/types';

interface DetailsProps {
  character: People;
}

export function Details({ character }: DetailsProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('details');

  const closeDetails = () => {
    searchParams.delete('details');
    setSearchParams(searchParams.toString());
  };

  return (
    <>
      <div className="card-details">
        <h2 className="name">{character.name}</h2>
        <div className="wrapper-img-details">
          <img
            className="img-details"
            src={`/${id}.jpg`}
            alt={character.name}
          />
        </div>
        <p className="height">Height: {character.height}</p>
        <p className="mass">Mass: {character.mass}</p>
        <p className="birth_year">Birth year: {character.birth_year}</p>
        <p className="gender">Gender: {character.gender}</p>
        <p className="skin_color">Skin color: {character.skin_color}</p>
        <p className="eye_color">Eye color: {character.eye_color}</p>
        <button className="btn" onClick={closeDetails}>
          Close
        </button>
      </div>
    </>
  );
}
