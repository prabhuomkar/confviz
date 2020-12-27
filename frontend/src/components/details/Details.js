import React from "react";
import PropTypes from "prop-types";

const Details = ({ data }) => {
  const { id, name, description, image, website, event_date } = data;
  return (
    <div>
      <img src={image} alt={id} className="image" />
      <h2>{id}</h2>
      <p>{name}</p>
      <p className="description">{description}</p>
      <p>
        Website:{" "}
        <a href={website} target="_blank" rel="noreferrer" className="link">
          {website}
        </a>
        <p>
          Date: <span className="link">{event_date}</span>
        </p>
      </p>
    </div>
  );
};

Details.propTypes = {
  data: PropTypes.string,
};

export default Details;
