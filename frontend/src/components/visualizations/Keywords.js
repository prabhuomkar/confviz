import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    keyword: "abc1",
    capusle_networks: 11,
  },
  {
    keyword: "abc2",
    capusle_networks: 15,
  },
  {
    keyword: "abc3",
    capusle_networks: 12,
  },
  {
    keyword: "abc4",
    capusle_networks: 13,
  },
  {
    keyword: "abc4",
    capusle_networks: 14,
  },
  {
    keyword: "abc4",
    capusle_networks: 15,
  },
  {
    keyword: "abc4",
    capusle_networks: 16,
  },
  {
    keyword: "abc4",
    capusle_networks: 17,
  },
  {
    keyword: "abc4",
    capusle_networks: 16,
  },
];

const Keywords = () => {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <ResponsiveContainer>
        <BarChart
          //width={300}
          //height={200}
          data={data}
          layout="vertical"
          //margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="keyword" />
          {/*<CartesianGrid strokeDasharray="3 3" />*/}
          <Tooltip />
          <Legend />
          <Bar dataKey="capusle_networks" fill="#4c959a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Keywords;

/*
import React from "react";
import ResponsiveOrdinalFrame from "semiotic/lib/ResponsiveOrdinalFrame";

const data = [
  { user: "Jason", tweets: 10 },
  { user: "Susie", tweets: 5 },
  { user: "Mtt", tweets: 20 },
  { user: "Bety", tweets: 30 },
  { user: "Jon", tweets: 111 },
  { user: "S", tweets: 555 },
  { user: "Mt", tweets: 202 },
  { user: "Beey", tweets: 303 },
];

data.sort((a, b) => {
  if (a.tweets > b.tweets) return -1;
  if (a.tweets < b.tweets) return 1;
  return 0;
});
//console.log(data);

const Keywords = (props) => {
  //const { data2 } = props;
  //console.log(data2);

  const KeywordsProps = {
    data,
    size: [200, 200],
    responsiveWidth: true,
    responsiveHeight: true,
    type: "bar",
    oPadding: 6,
    oAccessor: "user",
    rAccessor: "tweets",
    // rAccessor: function (e) {
    //   return e.tweets;
    // },
    style: { fill: "#4C959A", stroke: "white" },
    title: "Keywords",
    // oSort: function (e) {
    //   return e.tweets;
    // },
    oLabel: true,
    axes: false,
  };
  return (
    <div style={{ height: "360px", padding: "1rem" }} className="cell-card">
      <ResponsiveOrdinalFrame {...KeywordsProps} />
    </div>
  );
};

export default Keywords;

*/
