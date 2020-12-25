import React from "react";
import PropTypes from "prop-types";
import { GridRow, GridCell } from "@rmwc/grid";
import "@rmwc/card/styles";
import { Link } from "react-router-dom";

const WordCloud = ({ data }) => {
  return (
    <GridRow>
      {data.map((conference) => {
        const { id, name, event_date, wordcloud_image } = conference;
        return (
          <GridCell
            desktop={4}
            tablet={4}
            phone={12}
            className="word-cloud-card"
            key={id}
          >
            <Link to={id} className="link">
              <img src={wordcloud_image} alt="word_cloud" width="100%" />
              <h3 className="link">{id}</h3>
              <p>{name}</p>
              <p className="description">{event_date}</p>
            </Link>
          </GridCell>
        );
      })}
    </GridRow>
  );
};

WordCloud.propTypes = {
  data: PropTypes.array,
};

export default WordCloud;
