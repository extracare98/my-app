import http from "../http-common";

const getAll = () => {
  return http.get("/patients");
};

const get = id => {
  return http.get(`/patients/${id}`);
};

const create = data => {
  return http.post("/patients", data);
};

const update = (id, data) => {
  return http.put(`/patients/${id}`, data);
};

const remove = id => {
  return http.delete(`/patients/${id}`);
};

const removeAll = () => {
  return http.delete(`/patients`);
};

const findByName = name => {
  return http.get(`/patients?name=${name}`);
};

const PatientService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default PatientService;
