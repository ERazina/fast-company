import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const SearchStatus = (props) => {
  const count = props.users.length;
  const countColor = () => {
    if (count !== 0) {
      return "badge bg-primary";
    } else {
      return "badge bg-danger";
    }
  };

  const verbCount = () => {
    if (count === 1) {
      return "человек";
    } else if (count > 1 && count < 5) {
      return "человека";
    } else {
      return "человек";
    }
  };

  return (
    <>
      {props.users.length === 0 ? (
        <span className={countColor()}>никто не тусанет с тобой сегодня</span>
      ) : (
        <>
          <span className={countColor()}>
            {count} {verbCount()} тусанут с тобой сегодня
          </span>
        </>
      )}
    </>
  );
};

export default SearchStatus;
