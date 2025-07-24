import './styles.css';
import { People } from '../../types/types';
import { Link, useSearchParams } from 'react-router-dom';

interface PeopleItem {
  people: People;
}

export function CardItem({ people }: PeopleItem) {
  const [searchParams] = useSearchParams();

  const getPath = (): string => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (people.id) {
      newSearchParams.set('details', people.id);
    }
    return `?${newSearchParams}`;
  };

  return (
    <li className="card-container" key={people.name}>
      <Link to={getPath()}>
        <div className="wrapper-img">
          <img
            className="card-img"
            src={`/${people.id}.jpg`}
            alt={people.name}
          />
        </div>
        <p className="name">{people.name}</p>
      </Link>
    </li>
  );
}
