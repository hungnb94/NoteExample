import {ADD_NOTE_SAGA, EDIT_NOTE_SAGA, DELETE_POST_REQUEST, FETCH_POSTS_REQUEST} from './type';

export function addNote(note) {
    return {
        type: ADD_NOTE_SAGA,
        data: note,
    };
}

export function editNote(note) {
    return {
        type: EDIT_NOTE_SAGA,
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
