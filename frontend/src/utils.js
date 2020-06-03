import data from "./data/conferences";

const getConference = (id) => data.CONFERENCES.find((e) => e.id === id);

const withLongAndShortPapers = (id) => ["ACL", "EMNLP"].includes(id);

export default {
  getConference,
  withLongAndShortPapers,
};
