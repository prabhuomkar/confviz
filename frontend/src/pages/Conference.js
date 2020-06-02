import React from "react";
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "carbon-components-react";
import Tabs from "carbon-components-react/lib/components/Tabs";
import Tab from "carbon-components-react/lib/components/Tab";
import { useParams } from "react-router-dom";
import utils from "../utils";
import Error from "./Error";

const Conference = () => {
  let { conferenceID } = useParams();
  let conference = utils.getConference(conferenceID);
  let rows = [
    {
      id: "1",
      values: [
        { id: "a", value: "a" },
        { id: "b", value: "b" },
        { id: "c", value: "c" },
      ],
    },
    {
      id: "2",
      values: [
        { id: "d", value: "d" },
        { id: "e", value: "e" },
        { id: "f", value: "f" },
      ],
    },
  ];
  let headers = utils.getPaperTableHeaders();
  return (
    <>
      {conference[0] ? (
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col bx--col-lg-4 bx--col-md-6 bx--col-xlg-4 bx--col-sm-4">
              <img
                src={conference[0].logo}
                alt={conference[0].id}
                width="50%"
              />
              <br />
              <br />
              <h2>{conference[0].id}</h2>
              <h4>{conference[0].name}</h4>
              <br />
              <h5>
                Website:{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={conference[0].website}
                >
                  {conference[0].website}
                </a>
              </h5>
            </div>
            <div className="bx--col bx--col-lg-4 bx--col-md-6 bx--col-xlg-4 bx--col-sm-4">
              <Tabs type="default" selectionMode="automatic">
                <Tab id="papers" label="Papers">
                  <DataTable
                    rows={rows}
                    headers={headers}
                    render={() => (
                      <>
                        <Table>
                          <TableHead>
                            <TableRow>
                              {headers.map((header) => (
                                <TableHeader key={header.key}>
                                  {header.header}
                                </TableHeader>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <React.Fragment key={row.id}>
                                <TableRow>
                                  {row.values.map((value) => (
                                    <TableCell key={value.id}>
                                      {value.value}
                                    </TableCell>
                                  ))}
                                </TableRow>
                              </React.Fragment>
                            ))}
                          </TableBody>
                        </Table>
                      </>
                    )}
                  />
                </Tab>
                <Tab id="acceptance-rate" label="Acceptance Rate">
                  <p>Acceptance Rate</p>
                </Tab>
                <Tab id="visualizations" label="Visualizations">
                  <p>Visualizations</p>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Conference;
