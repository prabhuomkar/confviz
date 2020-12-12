import React from "react";

const Papers = (props) => {
  const { title, authors, papers, summary, link } = props;
  return (
    <div
      className="card-cell"
      style={{ padding: "0.6rem", margin: "0px 0px 18px 0px" }}
    >
      <p>{title}</p>
      <p style={{ color: "rgba(0, 0, 0, 0.66)" }}>
        <i>{authors}</i>
      </p>
      <p>
        <a href={link}>{link}</a>
      </p>
    </div>
  );
};

export default Papers;
