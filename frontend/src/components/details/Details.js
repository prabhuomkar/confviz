import React from "react";

const Details = (props) => {
  const { conf } = props;
  return (
    <div>
      <h2>{conf.id}</h2>
      <p>{conf.name}</p>
      <p className="description">{conf.description}</p>
      <p>
        Website :{" "}
        <a
          href={conf.website}
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          {conf.website}
        </a>
      </p>
    </div>
  );
};

export default Details;
