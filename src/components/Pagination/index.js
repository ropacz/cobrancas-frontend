import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Pagination({ currentPage, totalPages, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <Link
            key={number}
            to="#"
            className={
              currentPage + 1 === number
                ? "pagination__link active"
                : "pagination__link"
            }
            onClick={() => paginate(number - 1)}
          >
            <li>{number}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
