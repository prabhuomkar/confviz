import React from "react";
import { InlineNotification } from "carbon-components-react";

const Landing = () => {
  return (
    <div className="bx--grid">
      <div className="bx--row" style={{ justifyContent: "center" }}>
        <InlineNotification
          kind="info"
          subtitle={
            <span>
              &nbsp;&nbsp;<a href="/ICML">Visit Here</a>&nbsp;&nbsp;
            </span>
          }
          title="ICML 2020 are LIVE"
        />
      </div>
    </div>
  );
};

export default Landing;
