import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 5000,
});


export const createService = (data) => API.post("/api/application", data);
// export const updateService = (id, data) => API.put(`/posts/${id}`, data);
// export const deleteService = (id) => API.delete(`/posts/${id}`);

export const getOneService = (id) => API.get(`/api/application/${id}`);
export const getPost = () => API.get("/api/application");

export default API;
