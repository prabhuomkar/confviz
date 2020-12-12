import React from "react";
import { Grid, GridRow, GridCell } from "@rmwc/grid";
import { Icon } from "@rmwc/icon";
import "@rmwc/grid/styles";

const About = () => {
  return (
    <div>
      <Grid>
        <GridRow className="card">
          <GridCell desktop={8} phone={7} tablet={8} align="middle">
            <h1>About</h1>
            <h2>
              <Icon className="icon" icon="help" />
              What is conference-viz?
            </h2>
            <p>
              A website that gives you statistical information, arXiv paper
              links and visualizations of Machine Learning conferences. It is
              created and maintained by{" "}
              <a
                href="https://github.com/prabhuomkar"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Omkar Prabhu
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/akshaypithadiya"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Akshay Pithadiya
              </a>
              . It is inspired by{" "}
              <a
                href="https://github.com/roomylee/nlp-papers-with-arxiv"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Joohong Lee's work
              </a>
              .
            </p>
            <h2>
              <Icon className="icon" icon="connect_without_contact" />
              How can one contribute?
            </h2>
            <p>
              Visit{" "}
              <a
                href="https://github.com/prabhuomkar/conference-viz"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>{" "}
              for looking into source code and data.
              <br /> If you want to contribute data and visualizations for more
              machine learning conferences, feel free to look into the notebooks
              and raise a Pull Request (PR) on GitHub.
              <br /> If you found any issue in the visualizations, mark a{" "}
              <a
                href="https://github.com/prabhuomkar/conference-viz/issues"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Issue
              </a>{" "}
              and I will follow up!
            </p>
          </GridCell>
          <GridCell desktop={4} phone={5} tablet={4} align="middle">
            <img src="/assets/about.svg" alt="about" width="100%" />
          </GridCell>
        </GridRow>
      </Grid>
    </div>
  );
};

export default About;
