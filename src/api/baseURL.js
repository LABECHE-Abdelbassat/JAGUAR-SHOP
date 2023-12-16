import axios from "axios";

export const baseUrl = axios.create({baseURL:"http://localhost:8000"});
export const baseurl = "http://localhost:8000/api/v1";