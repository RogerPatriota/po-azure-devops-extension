import axios from "axios";

export const ConfluenceApi = () => {
    return axios.create({
        baseURL: 'https://poazconfluence.azurewebsites.net/api/get_pages',
    })
}
