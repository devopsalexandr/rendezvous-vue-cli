import axios from "axios";
import {SecurityService} from "../services/SecurityService";

export default function setup() {
    axios.interceptors.request.use( async function (config) {

        let token = await SecurityService.getToken();

        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}