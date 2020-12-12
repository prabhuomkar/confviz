import React from "react";

const Papers = (props) => {
  const { title, authors, link } = props;
  return (
    <div className="papers-card">
      <p>
        {title}{" "}
        <a href={link} className="link" target="_blank" rel="noreferrer">
          {link}
        </a>
      </p>
      <p className="authors">
        <i>{authors}</i>
      </p>
    </div>
  );
};

export default Papers;
