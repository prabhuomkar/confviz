import React from "react";
import ReactWordcloud from "react-wordcloud";

const options = {
  //rotations: 0,
  //rotationAngles: [0, 90],
  fontFamily: "Inter, sans-serif",
};

const size = [0, 240];

const words = [
  {
    text: "reinforcement",
    value: 44,
  },
  {
    text: "adversarial",
    value: 43,
  },
  {
    text: "graph",
    value: 40,
  },
  {
    text: "training",
    value: 38,
  },
  {
    text: "generalization",
    value: 24,
  },
  {
    text: "generative",
    value: 23,
  },
];

const WordCloud = () => {
  return (
    <ReactWordcloud
      options={options}
      size={size}
      words={words}
      style={{ borderBottom: "1px solid #e0e0e0" }}
    />
  );
};
export default WordCloud;
