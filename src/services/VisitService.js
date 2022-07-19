import http from "../http-common";

const create = data => {
    return http.post("/visits", data);
};

const getAllForOne = id => {
    return http.get(`/visits/${id}`);
  };

const VisitService = {  
    create,
    getAllForOne
};

export default VisitService;