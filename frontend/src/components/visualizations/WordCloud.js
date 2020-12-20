import React from "react";
import { GridRow, GridCell } from "@rmwc/grid";
import "@rmwc/card/styles";
import { Link } from "react-router-dom";

const WordCloud = ({ data }) => {
  return (
    <GridRow>
      {data.map((conference) => {
        return (
          <GridCell
            desktop={4}
            tablet={4}
            phone={12}
            className="card-cell"
            key={conference.id}
          >
            <Link to={conference.id} style={{ textDecoration: "none" }}>
              <img src="/assets/word_cloud.jpg" alt="word_cloud" width="100%" />
              <p className="link">{conference.name}</p>
              <p className="description">{conference.description}</p>
            </Link>
          </GridCell>
        );
      })}
    </GridRow>
  );
};
export default WordCloud;
