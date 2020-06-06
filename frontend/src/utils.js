import data from "./data/conferences";
import icmlKeywords from "./data/keywords/icml.json";
import icmlPapers from "./data/papers/icml.json";
import iclrKeywords from "./data/keywords/iclr.json";
import iclrPapers from "./data/papers/iclr.json";
import aclKeywords from "./data/keywords/acl.json";
import aclPapers from "./data/papers/acl.json";
import cvprKeywords from "./data/keywords/cvpr.json";
import cvprPapers from "./data/papers/cvpr.json";

const getConference = (id) => data.CONFERENCES.find((e) => e.id === id);

const withLongAndShortPapers = (id) => ["ACL", "EMNLP"].includes(id);

const getKeywords = (id) => {
  switch (id) {
    case "ICML":
      return icmlKeywords.map(modifyKeywordsForViz);
    case "ICLR":
      return iclrKeywords.map(modifyKeywordsForViz);
    case "ACL":
      return aclKeywords.map(modifyKeywordsForViz);
    case "CVPR":
      return cvprKeywords.map(modifyKeywordsForViz);
    default:
      return [];
  }
};

const getPapers = (id) => {
  switch (id) {
    case "ICML":
      return icmlPapers.map(modifyPapersForList);
    case "ICLR":
      return iclrPapers.map(modifyPapersForList);
    case "ACL":
      return aclPapers.map(modifyPapersForList);
    case "CVPR":
      return cvprPapers.map(modifyPapersForList);
    default:
      return [];
  }
};

const modifyPapersForList = (paper) => ({
  id: `${paper.title}`,
  title: paper.title,
  authors: paper.authors,
  link: paper.link,
});

const modifyKeywordsForViz = (kc) => ({
  text: kc[0],
  value: kc[1],
});

export default {
  getConference,
  withLongAndShortPapers,
  getKeywords,
  getPapers,
};
