interface handlePaginationProps {
  onPageChange: (page: number) => void;
  pageNumber: number;
  currentPage: number;
}

export function Pagination({
  onPageChange,
  pageNumber,
  currentPage,
}: handlePaginationProps) {
  const nextPage = () => {
    onPageChange(Number(currentPage) + 1);
  };

  const prevPage = () => {
    onPageChange(Number(currentPage) - 1);
  };

  return (
    <div className="btn-container">
      <button className="btn" onClick={prevPage} disabled={currentPage < 2}>
        Prev
      </button>
      <div>Page: {currentPage}</div>
      <button
        className="btn"
        onClick={nextPage}
        disabled={currentPage > Math.ceil(pageNumber / 10) - 1}
      >
        Next
      </button>
    </div>
  );
}
