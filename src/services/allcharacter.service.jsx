import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const  allCharacter = () => {
return axios.get(baseUrl + "/character/");
};
