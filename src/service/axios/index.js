import axios from "axios";
import storage from '../storage'

axios.defaults.baseURL = "/data/";
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
    config => {
        // console.log(config);
        config.headers['Token']=storage.getInfo('token');
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    responseData => {
        return responseData;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axios;
