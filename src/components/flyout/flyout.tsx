import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { unselectAll } from '../../store/selectedCharSlice';
import { createHref } from '../../utils/createHref';

export function Flyout() {
  const listSelecteChars = useSelector(
    (state: RootState) => state.selectedChar
  );
  const dispatch = useDispatch();

  const count = listSelecteChars.ids.length;

  const isShow = Boolean(count);

  const handleUnselectAll = (): void => {
    dispatch(unselectAll());
  };

  return (
    <div className={`flyout ${isShow ? 'show' : ''}`}>
      <span> Cards selected: {count} </span>
      <div className="btn-wrapper">
        <button className="btn" onClick={handleUnselectAll}>
          Unselect all
        </button>
        <button className="btn" type="button">
          <a
            className="download"
            href={createHref(Object.values(listSelecteChars.entities))}
            download={`${count}_character.csv`}
          >
            Download
          </a>
        </button>
      </div>
    </div>
  );
}
