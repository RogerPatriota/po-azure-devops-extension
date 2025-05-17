import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: 'https://poazconfluence.azurewebsites.net/api/check_point',
    })
}
