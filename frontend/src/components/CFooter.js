import React from "react";

const CFooter = () => {
  return (
    <div className="bx--col-lg-12 bx--col-md-8 bx--col-sm-4 footer">
      <br />
      <br />
      <center>
        <img
          src="https://img.shields.io/github/stars/prabhuomkar/conference-viz?style=social"
          style={{ verticalAlign: "middle" }}
          alt="GitHub Stars"
        />{" "}
        ・ Developed by{" "}
        <a
          href="https://github.com/prabhuomkar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Omkar Prabhu
        </a>{" "}
        ・ Designed using{" "}
        <a
          href="http://carbondesignsystem.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IBM's Carbon Design System
        </a>{" "}
        and{" "}
        <a
          href="http://uber.github.io/react-vis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Uber's Visualizations
        </a>
      </center>
      <br />
      <br />
    </div>
  );
};

export default CFooter;
