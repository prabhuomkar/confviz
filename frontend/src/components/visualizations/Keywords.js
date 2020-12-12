import React from "react";
import ResponsiveOrdinalFrame from "semiotic/lib/ResponsiveOrdinalFrame";

const Keywords = () => {
  const KeywordsProps = {
    data: [
      { user: "Jason", tweets: 10, retweets: 5, favorites: 15 },
      { user: "Susie", tweets: 5, retweets: 100, favorites: 100 },
      { user: "Matt", tweets: 20, retweets: 25, favorites: 50 },
      { user: "Betty", tweets: 30, retweets: 20, favorites: 10 },
    ],
    size: [200, 200],
    responsiveWidth: true,
    responsiveHeight: true,
    type: "bar",
    //projection: "horizontal",
    oPadding: 5,
    oAccessor: "user",
    rAccessor: function (e) {
      return e.tweets + e.retweets;
    },
    style: { fill: "#4C959A", stroke: "white" },
    title: "Keywords",
    //oSort: {(e.tweets, e.retweets) => e.tweets < e.retweets},
    oLabel: true,
    axes: false,
  };
  return (
    <div style={{ height: "360px", padding: "1rem" }} className="card-cell">
      <ResponsiveOrdinalFrame {...KeywordsProps} />
    </div>
  );
};

export default Keywords;
