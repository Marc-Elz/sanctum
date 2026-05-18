import { getRequest, postRequest } from "../../services/http";
import { authType } from "../../services/store/types";
import axios from "axios";

export const fetchUser = async () => {
    return await getRequest("/me");
};

export const authenticate = async (data: authType) => {
    // await axios.get("/sanctum/csrf-cookie").then((response) => {
    //     console.log("CRSF response:");
    //     console.log(response);
    //     // return postRequest("/login", data);
    // });
    // Trigger laravel to generate and set the xsrf token?
    await axios.get("/sanctum/csrf-cookie");
    const response = await postRequest("/login", data);
    return response;
};
