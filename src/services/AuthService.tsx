import axios from "axios";
import Constant from "../Constant";

const login = async (data: string) => {
    const email = data.email;
    const password = data.password;
    return await axios.post(Constant.API_URL + '/login', {
        email,
        password
    })
        .then((response) => {
            // if (response.data.token) {
            //     localStorage.setItem('user', JSON.stringify(response.data));
            // }
            return response.data;
        });
}

const logout = () => {
    localStorage.removeItem('user');
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user') || '{}');
}

export default {
    login,
    logout,
    getCurrentUser
};