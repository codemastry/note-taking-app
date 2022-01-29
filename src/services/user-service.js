import axios from "axios";

export default class UserService {
    static register = async (data) => {
        return new Promise((resolve, reject) => {
            axios.post(`https://localhost:44345/api/userauth/register`, data)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error.response.data);
                });
        });
    }

    static login = async (data) => {
        return new Promise((resolve, reject) => {
            axios.post(`https://localhost:44345/api/userauth/login`, data)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error.response.data);
                });
        });
    }
}