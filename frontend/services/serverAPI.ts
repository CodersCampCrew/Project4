import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});
const serverAPI = {
  async get({ url }: { url: string }) {
    const { data } = await axiosInstance.get(url);
    return data;
  },
  async post({ url, data }: { url: string; data: {} }) {
    const { data: fetchedData } = await axiosInstance.post(url, data);
    return fetchedData;
  },
};
export default serverAPI;
