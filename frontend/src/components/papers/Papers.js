import React from "react";
import PropTypes from "prop-types";

const Papers = (paper) => {
  const { title, authors, link } = paper;
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

Papers.propTypes = {
  paper: PropTypes.string,
};

export default Papers;
