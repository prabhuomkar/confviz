import React from "react";
import { UnorderedList, ListItem } from "carbon-components-react";
import utils from "./../../utils";

const Papers = (props) => {
  const { conference } = props;
  const { id } = conference;

  const rows = utils.getPapers(id);

  return (
    <div>
      <h4 className="text-underline">Papers</h4>
      <br />
      <UnorderedList>
        {rows.map((paper) => (
          <ListItem>
            <strong>{paper.title}</strong> -{" "}
            <a href={paper.link}>{paper.link}</a>
            <br />
            <em>{paper.authors}</em>
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  );
};

export default Papers;
