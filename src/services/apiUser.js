import axios from "axios";

const apiURL = 'http://localhost:5000/users';

export async function getAllUsers(params) {
    return await axios.get(`${apiURL}/getAllusers`)
}

export async function deleteUser(params) {
    return await axios.delete(`${apiURL}/deleteUser`)
}