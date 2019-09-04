import {ADD_NOTE, EDIT_NOTE} from './type';

export function addNote(note) {
    return {
        type: ADD_NOTE,
        data: note,
    };
}

export function editNote(note) {
    return {
        type: EDIT_NOTE,
        data: note,
    };
}
