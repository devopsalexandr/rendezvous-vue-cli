import axios from "axios";
import {TokenService} from "../services/TokenService";

export default function setup() {
    axios.interceptors.request.use(function(config) {
        const token = TokenService.getToken();

        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}