interface handlePaginationProps {
  onPageChange: (page: number) => void;
  peopleNumber: number;
  currentPage: number;
}

export function Pagination({
  onPageChange,
  peopleNumber,
  currentPage,
}: handlePaginationProps) {
  const nextPage = () => {
    onPageChange(Number(currentPage) + 1);
  };

  const prevPage = () => {
    onPageChange(Number(currentPage) - 1);
  };

  const pageNumber = Math.ceil(peopleNumber / 10);

  return (
    <div className="btn-container">
      <button className="btn" onClick={prevPage} disabled={currentPage < 2}>
        Prev
      </button>
      <div>
        Page: {currentPage}/{pageNumber}
      </div>
      <button
        className="btn"
        onClick={nextPage}
        disabled={currentPage > pageNumber - 1}
      >
        Next
      </button>
    </div>
  );
}
