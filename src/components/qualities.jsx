import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Qualities = (props) => {
  const getQualityColor = (quality) => {
    if (quality === "Алкоголик") {
      return "badge bg-danger m-1";
    }
    if (quality === "Неуверенный") {
      return "badge bg-dark  m-1";
    }
    if (quality === "Нудила") {
      return "badge bg-primary  m-1";
    }
    if (quality === "Троль") {
      return "badge bg-success  m-1";
    }
    if (quality === "Странный") {
      return "badge bg-secondary  m-1";
    }
    if (quality === "Красавчик") {
      return "badge bg-warning  m-1";
    }
  };

  return (
    <>
      {props.qualities.map((quality) => (
        <span className={getQualityColor(quality.name)} key={quality._id}>
          {quality.name}
        </span>
      ))}
    </>
  );
};

export default Qualities;
