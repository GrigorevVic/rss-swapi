import './styles.css';
import { People } from '../../types/types';
import { getIdFromUrl } from '../../utils/utils';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectChar,
  unselectChar,
  selectById,
} from '../../store/selectedCharSlice';
import type { RootState } from '../../store/store';
import { useSearchParams } from 'next/navigation';

interface PeopleItem {
  people: People;
}
export function CardItem(props: PeopleItem) {
  const searchParams = useSearchParams();
  const { people } = props;
  const dispatch = useDispatch();

  const isSelectedPeople = Boolean(
    useSelector((state: RootState) => selectById(state, people.name))
  );

  const id = getIdFromUrl(people.url);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.checked) {
      dispatch(selectChar(people));
    } else {
      dispatch(unselectChar(people.name));
    }
  };

  const params = new URLSearchParams(searchParams);
  const page = params.get('page');
  const search = params.get('search') ? `search=${params.get('search')}&` : '';
  const href = `?${search}page=${page}&details=${id}`;

  return (
    <li className="card-container" key={people.name}>
      <Link href={href}>
        <div className="wrapper-img">
          <img className="card-img" src={`/${id}.jpg`} alt={people.name} />
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
