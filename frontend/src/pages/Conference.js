import React from "react";
import { useParams } from "react-router-dom";
import utils from "../utils";
import Error from "./Error";

const Conference = () => {
  let { conference } = useParams();
  if (utils.validateConference(conference)) {
    return (
      <>
        <h2>Conference: {conference}</h2>
      </>
    );
  } else {
    return <Error />;
  }
};

export default Conference;
