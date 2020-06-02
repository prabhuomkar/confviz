import data from "./data";

const validateConference = (id) =>
  data.CONFERENCES.filter((e) => e.id === id).length > 0 ? true : false;

export default {
  validateConference,
};
