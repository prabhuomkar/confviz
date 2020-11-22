import React from "react";
import { Grid, GridCell } from "@rmwc/grid";
import "@rmwc/grid/styles";
import AcceptanceRateGraph from "../components/graphs/AcceptanceRateGraph";

const CVPR = () => {
  const data = [
    { year: "2014", accepted: 540, total: 1807 },
    { year: "2015", accepted: 602, total: 2123 },
    { year: "2016", accepted: 643, total: 2145 },
    { year: "2017", accepted: 783, total: 2620 },
    { year: "2018", accepted: 979, total: 3303 },
    { year: "2019", accepted: 1294, total: 5160 },
    { year: "2020", accepted: 1470, total: 6656 },
  ];
  const title = "CVPR Acceptance Rate";
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

export default CVPR;
