import axios from 'axios'

const HttpApiClient = {

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    get(path) {
        return axios.get(path);
    },

    post(path, data) {
        return axios.post(path, data);
    }
};

export default HttpApiClient;