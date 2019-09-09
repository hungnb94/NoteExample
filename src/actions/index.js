import {ADD_POST_REQUEST, EDIT_POST_REQUEST, DELETE_POST_REQUEST, FETCH_POSTS_REQUEST} from './type';

export function addPost(note) {
    return {
        type: ADD_POST_REQUEST,
        data: note,
    };
}

export function editPost(note) {
    return {
        type: EDIT_POST_REQUEST,
        data: note,
    };
}

export function deletePost(note) {
    return {
        type: DELETE_POST_REQUEST,
        data: note,
    };
}

export function fetchPosts() {
    return {
        type: FETCH_POSTS_REQUEST,
    };
}
