import React from "react";
import _ from "lodash";

const Pagination = ({
  amountOfPages,
  itemsCount,
  onPageChange,
  currentPage,
}) => {
  const pageCount = Math.ceil(itemsCount / amountOfPages);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={"page-item " + (page === currentPage ? "active" : "")}
            key={`page-${page}`}
          >
            <button onClick={() => onPageChange(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
