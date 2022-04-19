import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { amountOfPages, itemsCount } = props;
  const pageCount = Math.ceil(itemsCount / amountOfPages);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  console.log(pages);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className="page-item" key={`page-${page}`}>
            <a href="#" className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
