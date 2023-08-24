import axios from "axios";

const Axios = axios.create({
    baseURL: "http://54.80.196.89/api/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default Axios;
