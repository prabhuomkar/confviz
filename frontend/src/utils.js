import data from "./data/conferences";
import icmlKeywords from "./data/keywords/icml.json";

const getConference = (id) => data.CONFERENCES.find((e) => e.id === id);

const withLongAndShortPapers = (id) => ["ACL", "EMNLP"].includes(id);

const getKeywords = (id) => {
  switch (id) {
    case "ICML":
      return icmlKeywords.map((kc) => ({ text: kc[0], value: kc[1] }));
    case "ICLR":
      return [].map((kc) => ({ text: kc[0], value: kc[1] }));
    case "ACL":
      return [].map((kc) => ({ text: kc[0], value: kc[1] }));
    case "NeurIPS":
      return [].map((kc) => ({ text: kc[0], value: kc[1] }));
    case "CVPR":
      return [].map((kc) => ({ text: kc[0], value: kc[1] }));
    case "EMNLP":
      return [].map((kc) => ({ text: kc[0], value: kc[1] }));
    default:
      return null;
  }
};

export default {
  getConference,
  withLongAndShortPapers,
  getKeywords,
};
