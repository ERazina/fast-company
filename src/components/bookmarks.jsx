import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Bookmarks = (props) => {
  const { bookmark, user } = props;

  console.log(props);

  const renderIcon = () => {
    return bookmark ? (
      <button onClick={() => props.toggleBookmark(user._id)}>
        <i className="bi bi-bookmark-fill"></i>
      </button>
    ) : (
      <button onClick={() => props.toggleBookmark(user._id)}>
        <i className="bi bi-bookmark"></i>
      </button>
    );
  };

  return <div>{renderIcon()}</div>;
};

export default Bookmarks;
