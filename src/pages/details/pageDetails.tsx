import './styles.css';
import { useLocation } from 'react-router-dom';
import { Details } from '../../components/details/Details';
import { Loader } from '../../components/loader/Loader';
import { useGetCharacterByIdQuery } from '../../api/api';

export function PageDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('details');
  const { data, isFetching } = useGetCharacterByIdQuery({ id });

  return <>{!isFetching ? <Details character={data} /> : <Loader />} </>;
}
