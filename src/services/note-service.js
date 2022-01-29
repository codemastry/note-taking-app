import axios from "axios";

export default class NoteService {
    static all = async () => {
        return new Promise((resolve, reject) => {
            axios.get(`https://localhost:44345/api/notes`,
                {
                    headers: {
                        "Authorization": `bearer ${localStorage.getItem("token")}`
                    }
                })
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
        });
    }

    static byId = async (id) => {
        return new Promise((resolve, reject) => {
            axios.get(`https://localhost:44345/api/notes/${id}`,
                {
                    headers: {
                        "Authorization": `bearer ${localStorage.getItem("token")}`
                    }
                })
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
        });
    }

    static create = async (data) => {
        return new Promise((resolve, reject) => {
            axios.post(`https://localhost:44345/api/notes`, data,
                {
                    headers: {
                        "Authorization": `bearer ${localStorage.getItem("token")}`
                    }
                })
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
        });
    }

    static update = async (data) => {
        return new Promise((resolve, reject) => {
            axios.put(`https://localhost:44345/api/notes/${data.id}`, data,
                {
                    headers: {
                        "Authorization": `bearer ${localStorage.getItem("token")}`
                    }
                })
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
        });
    }

    static delete = async (id) => {
        return new Promise((resolve, reject) => {
            axios.delete(`https://localhost:44345/api/notes/${id}`,
                {
                    headers: {
                        "Authorization": `bearer ${localStorage.getItem("token")}`
                    }
                })
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });
        });
    }
}