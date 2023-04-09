import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const  consultCharacter = (id) => {
return axios.get(baseUrl + "/character/" + id);
};
