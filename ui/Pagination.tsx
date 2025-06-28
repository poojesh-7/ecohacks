/* eslint-disable @next/next/no-img-element */
import React from "react";
import { JSX } from "react";
import classes from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  pageno: number;
  finalPagenos: { first: number; last: number };
  getPageno: (page: number) => void;
  previousPage: () => void;
  nextPage: () => void;
  previous5Pages: () => void;
  next5Pages: () => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const dispBtn: JSX.Element[] = [];

  for (let i = 1; i <= props.totalPages; i++) {
    dispBtn.push(
      <button
        className={`${classes.pageno} ${props.pageno === i ? classes.pageno_active : ""}`}
        key={i}
        onClick={() => props.getPageno(i)}
      >
        {i}
      </button>
    );
  }

  const finalDisp = dispBtn.slice(props.finalPagenos.first, props.finalPagenos.last);

  return (
    <div className={classes.pagenos}>
      <button
        className={classes.page_btn}
        disabled={props.pageno === 1}
        onClick={props.previous5Pages}
      >
        <img
          className={`${classes.nav_arrow} ${classes.nb}`}
          src="https://i.ibb.co/9kFw2T3k/fast-forward-double-right-arrows-symbol.png"
          alt="fast-forward-double-right-arrows-symbol"
        />
      </button>

      <button
        className={classes.page_btn}
        disabled={props.pageno === 1}
        onClick={props.previousPage}
      >
        <img
          className={`${classes.nav_arrow} ${classes.nb}`}
          src="https://i.ibb.co/vvs5VydP/right-arrow-1.png"
          alt="right-arrow-1"
        />
      </button>

      {finalDisp}

      <button
        className={classes.page_btn}
        disabled={props.pageno === props.totalPages}
        onClick={props.nextPage}
      >
        <img
          className={classes.nav_arrow}
          src="https://i.ibb.co/vvs5VydP/right-arrow-1.png"
          alt="right-arrow-1"
        />
      </button>

      <button
        className={classes.page_btn}
        disabled={props.pageno === props.totalPages}
        onClick={props.next5Pages}
      >
        <img
          className={classes.nav_arrow}
          src="https://i.ibb.co/9kFw2T3k/fast-forward-double-right-arrows-symbol.png"
          alt="fast-forward-double-right-arrows-symbol"
        />
      </button>
    </div>
  );
};

export default Pagination;
