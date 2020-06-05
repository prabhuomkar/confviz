import React from "react";
import Help from "@carbon/icons-react/lib/help--filled/32";
import Collaborate from "@carbon/icons-react/lib/collaborate/32";

const About = () => {
  return (
    <div className="bx--grid bx--grid--condensed">
      <div className="bx--row">
        <div className="bx--col bx--col-lg-6 bx--col-md-4 bx--col-sm-4 bx--aspect-ratio bx--aspect-ratio--2x1">
          <img
            src="/assets/about_header.svg"
            className="bx--aspect-ratio--object"
            alt="About"
            style={{ padding: "32px" }}
          />
        </div>
        <div className="bx--col bx--col-lg-6 bx--col-md-4 bx--col-sm-4">
          <br />
          <br />
          <h2>About</h2>
          <br />
          <br />
          <h4>
            <Help style={{ verticalAlign: "middle" }} /> What is conference-viz?
          </h4>
          <br />
          <p>
            A website that gives you statistical information, arXiv paper links
            and visualizations of Machine Learning conferences.
            <br />
            It is created and maintained by{" "}
            <a href="https://github.com/prabhuomkar">Omkar Prabhu</a> and
            inspired by{" "}
            <a href="https://github.com/roomylee/ACL-2020-Papers">
              Joohong Lee's work
            </a>
            .
          </p>
          <br />
          <br />
          <h4>
            <Collaborate style={{ verticalAlign: "middle" }} /> How can one
            contribute?
          </h4>
          <br />
          <p>
            Visit{" "}
            <a href="https://github.com/prabhuomkar/conference-viz">GitHub </a>{" "}
            for looking into source code and data.
            <br />
            If you want to contribute data and visualizations for more machine
            learning conferences, feel free to look into the notebooks and raise
            a Pull Request (PR) on GitHub.
            <br />
            If you found any issue in the visualizations, mark a{" "}
            <a href="https://github.com/prabhuomkar/conference-viz/issues">
              GitHub Issue
            </a>{" "}
            and I will follow up!
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
