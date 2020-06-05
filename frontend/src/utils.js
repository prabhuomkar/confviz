import data from "./data/conferences";
import icmlKeywords from "./data/keywords/icml.json";
import icmlPapers from "./data/papers/icml.json";

const getConference = (id) => data.CONFERENCES.find((e) => e.id === id);

const withLongAndShortPapers = (id) => ["ACL", "EMNLP"].includes(id);

const getKeywords = (id) => {
  switch (id) {
    case "ICML":
      return icmlKeywords.map((kc) => ({ text: kc[0], value: kc[1] }));
    default:
      return [];
  }
};

const getPapers = (id) => {
  switch (id) {
    case "ICML":
      return icmlPapers.map((paper) => ({
        id: `${paper.title}`,
        title: paper.title,
        authors: paper.authors,
        link: paper.link,
      }));
    default:
      return [];
  }
};

export default {
  getConference,
  withLongAndShortPapers,
  getKeywords,
  getPapers,
};
