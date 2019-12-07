import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = itemCount / pageSize;

  if (pagesCount === 1) return null;

  // Create an array of the number of pages (starting from 1, up to but not including pagesCount+1)
  const pages = _.range(1, pagesCount + 1);

  return (
    <div className="row">
      <div className="col ">
        <nav>
          <ul className="pagination">
            {pages.map(page => (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <a
                  className="page-link"
                  onClick={() => {
                    onPageChange(page);
                  }}
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
