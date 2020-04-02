import axios from "axios";

export const getAll = (baseURL: string) => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

export const create = (baseURL: string, newObj: object) => {
  const request = axios.post(baseURL, newObj);
  return request.then((response) => response.data);
};

export const update = (baseURL: string, id: any, newObj: object) => {
  const request = axios.put(`${baseURL}/${id}`, newObj);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
};
