import data from "./data";

const getConference = (id) => data.CONFERENCES.filter((e) => e.id === id);

const getPaperTableHeaders = () => [
  { key: "title", header: "Title" },
  { key: "authors", header: "Authors" },
  { key: "arxiv", header: "arXiv" },
];

export default {
  getConference,
  getPaperTableHeaders,
};
