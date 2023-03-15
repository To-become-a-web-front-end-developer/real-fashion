import Auth from "../modules/Auth";
import axios from "axios";

const URL = "http://10.150.151.58:3000";

const API = (config) => {
    if (Auth.user_token) {
        const token = Auth.getToken();

        config.headers = {
            authorization: token,
        }
    }
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        function error(error) {
            if (!error.response) {
                error.response = {
                    data: "net work error",
                    status: 500
                }
            }
            if (error.response.status === 401) {
                Auth.logout();

                throw error;
            }
            return Promise.reject(error);
        }
    );
    config.baseURL = URL;
    return axios(config);
}
export default API;