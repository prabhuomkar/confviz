import React, { useState, useEffect, useRef } from "react";
import { XYPlot, XAxis, HorizontalBarSeries, YAxis } from "react-vis";

const Keywords = (props) => {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  const updateWidth = () =>
    setWidth(
      ref && ref.current ? ref.current.getBoundingClientRect().width : 0
    );

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const { keywords } = props;
  const data = keywords
    .map((elem) => ({ y: elem["text"], x: elem["value"] }))
    .sort((a, b) => {
      let x = a["value"],
        y = b["value"];
      return x < y ? -1 : x > y ? 1 : 0;
    })
    .slice(0, 36)
    .sort((a, b) => {
      let x = a["value"],
        y = b["value"];
      return x < y ? (x > y ? 0 : 1) : -1;
    });

  return (
    <div style={{ width: "100%" }} ref={ref}>
      <h4 className="text-underline">Keywords</h4>
      <XYPlot
        margin={{ left: 96 }}
        width={width}
        height={(width * 4) / 3}
        yType="ordinal"
        animation={{ duration: 500 }}
      >
        <XAxis />
        <YAxis style={{ fill: "black" }} />
        <HorizontalBarSeries data={data} />
      </XYPlot>
      <br />
      <br />
    </div>
  );
};

export default Keywords;
