import React from "react";
import {
  Table,
  DataTable,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
} from "carbon-components-react";
import utils from "./../../utils";

const Papers = (props) => {
  const { conference } = props;
  const { id } = conference;

  const headers = [
    { key: "title", header: "Title" },
    { key: "authors", header: "Authors" },
    { key: "link", header: "Link" },
  ];
  const rows = utils.getPapers(id).slice(0, 200);

  return (
    <div>
      <DataTable
        rows={rows}
        headers={headers}
        render={({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getTableProps,
          getTableContainerProps,
        }) => (
          <TableContainer
            title="Papers"
            description="From ICML 2020"
            {...getTableContainerProps()}
          >
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow {...getRowProps({ row })}>
                    {row.cells.map((cell) =>
                      cell.id.includes("link") ? (
                        <TableCell key={cell.id}>
                          <a href={cell.value}>{cell.value}</a>
                        </TableCell>
                      ) : (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      )
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    </div>
  );
};

export default Papers;
