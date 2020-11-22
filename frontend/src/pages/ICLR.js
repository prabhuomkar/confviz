import React from "react";
import { Grid, GridCell } from "@rmwc/grid";
import "@rmwc/grid/styles";
import ResponsiveXYFrame from "semiotic/lib/ResponsiveXYFrame";
import ResponsiveOrdinalFrame from "semiotic/lib/ResponsiveOrdinalFrame";
import {
  verticalBarGraphProps,
  horizontalBarGraphProps,
  areaGraphProps,
} from "./data";

const ICLR = () => {
  return (
    <div>
      <Grid style={{ padding: "10px" }}>
        <GridCell
          desktop={6}
          tablet={6}
          phone={12}
          style={{ border: "1px solid white", height: "450px", width: "100%" }}
        >
          <ResponsiveOrdinalFrame
            responsiveWidth={1}
            responsiveHeight={1}
            {...verticalBarGraphProps}
          />
        </GridCell>
        <GridCell
          desktop={6}
          tablet={6}
          phone={12}
          style={{ border: "1px solid grey" }}
        >
          two
        </GridCell>
      </Grid>
      <Grid style={{ padding: "10px" }}>
        <GridCell
          desktop={6}
          tablet={6}
          phone={12}
          style={{
            border: "1px solid white",
            height: "450px",
          }}
        >
          <ResponsiveOrdinalFrame
            responsiveWidth={1}
            responsiveHeight={1}
            {...horizontalBarGraphProps}
          />
        </GridCell>
        <GridCell
          desktop={6}
          tablet={6}
          phone={12}
          style={{
            border: "1px solid white",
            height: "450px",
          }}
        >
          <ResponsiveXYFrame
            responsiveWidth={1}
            responsiveHeight={1}
            {...areaGraphProps}
          />
        </GridCell>
      </Grid>
    </div>
  );
};

export default ICLR;
