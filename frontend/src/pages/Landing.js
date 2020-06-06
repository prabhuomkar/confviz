import React from "react";
import { InlineNotification } from "carbon-components-react";

const Landing = () => {
  return (
    <div className="bx--grid bx--grid--condensed">
      <div className="bx--row" style={{ justifyContent: "center" }}>
        <InlineNotification
          kind="info"
          subtitle={
            <span>
              &nbsp;&nbsp;<a href="/CVPR">Visit Here</a>&nbsp;&nbsp;
            </span>
          }
          title="CVPR 2020 is LIVE"
        />
        <InlineNotification
          kind="info"
          subtitle={
            <span>
              &nbsp;&nbsp;<a href="/ICML">Visit Here</a>&nbsp;&nbsp;
            </span>
          }
          title="ICML 2020 is LIVE"
        />
      </div>
    </div>
  );
};

export default Landing;
