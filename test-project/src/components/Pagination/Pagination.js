import React from "react";
import {TemplateButton} from "../TemplateButton/TemplateButton";
import "./Pagination.css";

const Pagination = (
  {
    postPerPage,
    totalPosts,
    paginate,
    prevPage,
    nextPage,
    currentPage
  }
) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++ ) {
    pageNumbers.push(i);
  }

  return (
      <div className={"centerPagination"}>
        <ul className={"pagination"}>
          <li className={"page-item pos-prev"}>
            <TemplateButton styleBtn={"link"} func={prevPage} content={"Назад"}/>
          </li>
          {
            pageNumbers.map((number) => (
              <li className={"page-item"} key={number}>
                <a href={"/#" + number} className={number === {currentPage} ? "active" : ""} onClick={() => paginate(number)}>
                  {number}
                </a>
              </li>
            ))
          }
          <li className={"page-item pos-next"}>
            <TemplateButton styleBtn={"link"} func={nextPage} content={"Далее"}/>
          </li>
        </ul>
      </div>
  )
}

export default Pagination;