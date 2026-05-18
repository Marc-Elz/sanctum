import axios from "axios";
import { authType } from "../store/types";
import {
    destroyErrors,
    destroyMessage,
    setErrorBag,
    setMessage,
} from "../error";

const http = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

export const getRequest = (endpoint: string) => http.get(endpoint);
export const postRequest = (endpoint: string, data: any) =>
    http.post(endpoint, data);

http.interceptors.request.use(
    (config) => {
        destroyErrors(); // Wis oude fouten voordat een nieuw verzoek wordt uitgevoerd
        destroyMessage(); // Wis oude "messages" voordat een nieuw verzoek wordt uitgevoerd
        return config;
    },
    (error) => Promise.reject(error),
);

http.interceptors.response.use(
    (response) => response,
    (error) => {
        if (
            error.response &&
            (error.response.status === 422 || error.response.status === 403)
        ) {
            setErrorBag(error.response.data.errors); // Sla validatiefouten op in de error bag
            setMessage(error.response.data.message); // Sla de algemene foutmelding op
        }
        //return Promise.reject(error);
    },
);
