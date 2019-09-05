import axios from 'axios'


export function fetchPostsApi() {
    return axios.get("https://5d70e471d3448a001411b0b6.mockapi.io/api/users")
        .then(({data}) => data);
}

export function deletePostApi(id) {
    console.log("id", id);
    return axios.delete("https://5d70e471d3448a001411b0b6.mockapi.io/api/users/" + id)
        .then(() => {});
}
