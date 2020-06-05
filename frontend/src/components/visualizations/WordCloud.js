import React from "react";
import ReactWordcloud from "react-wordcloud";
import utils from "../../utils";

const WordCloud = (props) => {
  const { conference } = props;
  const { id } = conference;
  return (
    <div>
      <h4>WordCloud</h4>
      <ReactWordcloud 
        words={utils.getKeywords(id)}
        options={{
          fontFamily: "Arial",
          fontWeight: "bold",
          rotations: 1,
          rotationAngles: [0, 90],
        }}
      />
      <br />
      <br />
    </div>
  );
};

export default WordCloud;
