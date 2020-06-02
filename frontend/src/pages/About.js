import React from "react";
import Help from "@carbon/icons-react/lib/help--filled/32";
import Collaborate from "@carbon/icons-react/lib/collaborate/32";

const About = () => {
  return (
    <div class="bx--grid">
      <div class="bx--row">
        <div class="bx--col bx--col-lg-6 bx--col-md-4 bx--col-sm-4">
          <center>
            <img src="/assets/about_header.svg" alt="About" width="75%" />
          </center>
        </div>
        <div class="bx--col bx--col-lg-6 bx--col-md-4 bx--col-sm-4">
          <br />
          <br />
          <h2 align="center">About</h2>
          <br />
          <br />
          <h4>
            <Help style={{ verticalAlign: "middle" }} /> What is conference-viz?
          </h4>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <br />
          <br />
          <h4>
            <Collaborate style={{ verticalAlign: "middle" }} /> How can one
            contribute?
          </h4>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
