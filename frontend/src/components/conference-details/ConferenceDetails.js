import React from "react";

const ConferenceDetails = (props) => {
  const { conf } = props;
  return (
    <div style={{ padding: "1rem" }}>
      <h2>{conf.id}</h2>
      <p>{conf.name}</p>
      <p style={{ color: "rgba(0,0,0,.66)" }}>{conf.description}</p>
      <p>
        Website :{" "}
        <a href={conf.website} target="_blank" rel="noreferrer">
          {conf.website}
        </a>
      </p>
    </div>
  );
};

export default ConferenceDetails;
