import axios from 'axios'

const BASE_URL = "https://5d70e471d3448a001411b0b6.mockapi.io/api/users/";

export function fetchPostsApi() {
    return axios.get(BASE_URL)
        .then(({data}) => data);
}

export function deletePostApi(id) {
    console.log("id", id);
    return axios.delete(BASE_URL + id)
        .then(() => {});
}

export function updatePostApi(id, name, avatar) {
    console.log("update user", {id, name, avatar});
    const data = avatar !== undefined ? {name, avatar} : {name};
    const config = { headers: {'Content-Type': 'application/json'} };
    return axios.put(BASE_URL + id, data, config)
        .then((data) => data);
}

export function addPostApi(name) {
    console.log("Add user", {name});
    const data = {name};
    const config = { headers: {'Content-Type': 'application/json'} };
    return axios.post(BASE_URL, data, config)
        .then((data) => data);
}
