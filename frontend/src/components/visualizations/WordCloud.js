import React from "react";
import ReactWordcloud from "react-wordcloud";

const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
  fontFamily: "Inter, sans-serif",
};
const size = [280, 300];

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
    <div>
      <center style={{ padding: "10px" }}>WordCloud</center>
      <ReactWordcloud options={options} size={size} words={words} />
    </div>
  );
};
export default WordCloud;
