import './styles.css';
import { People } from '../../types/types';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectChar,
  unselectChar,
  selectById,
} from '../../store/selectedCharSlice';
import type { RootState } from '../../store/store';

interface PeopleItem {
  people: People;
}
export function CardItem({ people }: PeopleItem) {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const isSelectedPeople = Boolean(
    useSelector((state: RootState) => selectById(state, people.name))
  );

  const getPath = (): string => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (people.id) {
      newSearchParams.set('details', people.id);
    }
    return `?${newSearchParams}`;
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.checked) {
      dispatch(selectChar(people));
    } else {
      dispatch(unselectChar(people.name));
    }
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
      <input
        type="checkbox"
        className="checkbox"
        checked={isSelectedPeople}
        onChange={handleCheckboxChange}
      />
    </li>
  );
}
