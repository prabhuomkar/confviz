import React from "react";
import { useParams } from "react-router-dom";
import utils from "../utils";
import Error from "./Error";
import AcceptanceRate from "../components/visualizations/AcceptanceRate";
import WordCloud from "../components/visualizations/WordCloud";
import Keywords from "../components/visualizations/Keywords";

const Conference = () => {
  const { conferenceID } = useParams();
  const conference = utils.getConference(conferenceID);
  const { id, website, name } = conference;
  const keywords = utils.getKeywords(id);
  return (
    <>
      {conference ? (
        <div className="bx--grid bx--grid--condensed">
          <div className="bx--row">
            <div className="bx--col bx--col-lg-4 bx--col-md-8 bx--col-xlg-4 bx--col-sm-4">
              <br />
              <br />
              <h2>{id}</h2>
              <h4>{name}</h4>
              <br />
              <h5>
                Website:{" "}
                <a target="_blank" rel="noopener noreferrer" href={website}>
                  {website}
                </a>
              </h5>
              <br />
              <br />
            </div>
            <div className="bx--col bx--col-lg-8 bx--col-md-8 bx--col-xlg-8 bx--col-sm-4">
              <AcceptanceRate conference={conference} />
              <WordCloud keywords={keywords} />
              <Keywords keywords={keywords} />
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Conference;
