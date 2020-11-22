import React from "react";
import { Grid, GridCell } from "@rmwc/grid";
import "@rmwc/grid/styles";
import AcceptanceRateGraph from "../components/graphs/AcceptanceRateGraph";

const ICLR = () => {
  const data = [
    { year: "2017", accepted: 198, total: 507 },
    { year: "2018", accepted: 314, total: 981 },
    { year: "2019", accepted: 500, total: 1591 },
    { year: "2020", accepted: 681, total: 2594 },
  ];
  const title = "ICLR Acceptance Rate";
  return (
    <div>
      <Grid style={{ padding: "10px" }}>
        <GridCell
          desktop={6}
          tablet={6}
          phone={12}
          style={{
            border: "1px solid grey",
            padding: "10px",
            height: "450px",
            width: "100%",
          }}
        >
          <AcceptanceRateGraph title={title} data={data} />
        </GridCell>
        <GridCell
          desktop={6}
          tablet={6}
          phone={12}
          style={{ border: "1px solid gray" }}
        ></GridCell>
      </Grid>
      <Grid style={{ padding: "10px" }}>
        <GridCell
          desktop={6}
          tablet={6}
          phone={12}
          style={{
            border: "1px solid grey",
            height: "450px",
          }}
        ></GridCell>
        <GridCell
          desktop={6}
          tablet={6}
          phone={12}
          style={{
            border: "1px solid grey",
            height: "450px",
          }}
        ></GridCell>
      </Grid>
    </div>
  );
};

export default ICLR;
