


import axios from "axios";
import { API_URL } from "./config";

const $axios = axios.create({
    baseURL: API_URL,
});

export default $axios;