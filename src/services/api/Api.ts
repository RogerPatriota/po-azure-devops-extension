import axios from "axios";

export const Api = () => {
    return axios.create({
        baseURL: 'https://confluence.nttltd.global.ntt/rest/api/',
        headers: {
            "Authorization": 'Bearer ',
            "Accept": "application/json"
        }
    })
}
