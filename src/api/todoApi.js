import axiosClient from "./axiosClient";

const todoApi = {
  getAll: (params) => {
    const url = "/posts";
    return axiosClient.get(url, { params });
  },
};
export default todoApi;
