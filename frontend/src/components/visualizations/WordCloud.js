import React from "react";
import ReactWordcloud from "react-wordcloud";

const WordCloud = (props) => {
  const { keywords } = props;
  return (
    <div>
      <h4 className="text-underline">WordCloud</h4>
      <ReactWordcloud
        words={keywords}
        options={{
          fontFamily: "Arial",
          fontWeight: "bold",
          rotations: 1,
          rotationAngles: [0, 90],
        }}
      />
    </div>
  );
};

export default WordCloud;
