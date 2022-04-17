import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Bookmarks = (props) => {
  const { bookmark } = props;

  const renderIcon = () => {
    console.log(bookmark);
    return bookmark ? (
      <i className="bi bi-bookmark-fill"></i>
    ) : (
      <i className="bi bi-bookmark"></i>
    );
  };

  return <div>{renderIcon()}</div>;
};

export default Bookmarks;
