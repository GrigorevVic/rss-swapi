import { ApiResponse } from '../../types/types';

interface PaginationProps {
  currentPage: number;
  onPageChange: (arg: number) => void;
  response?: ApiResponse;
}

export const Pagination = ({
  currentPage,
  onPageChange,
  response,
}: PaginationProps) => {
  const { previous, next } = response as ApiResponse;
  const prevPage = previous ? new URL(previous).searchParams.get('page') : null;
  const nextPage = next ? new URL(next).searchParams.get('page') : null;

  const pageCount = response ? Math.ceil(response?.count / 10) : '?';

  const handlePrevious = () => {
    onPageChange(Number(prevPage));
  };

  const handleNext = () => {
    onPageChange(Number(nextPage));
  };
  return (
    <div className="btn-container">
      <button className="btn" onClick={handlePrevious} disabled={!previous}>
        Prev
      </button>
      <span>
        Page: {currentPage} / {pageCount}
      </span>
      <button className="btn" onClick={handleNext} disabled={!next}>
        Next
      </button>
    </div>
  );
};
