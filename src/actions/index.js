import {ADD_NOTE_SAGA, EDIT_NOTE_SAGA, DELETE_NOTE_SAGA} from './type';

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

export function deleteNote(note) {
    return {
        type: DELETE_NOTE_SAGA,
        data: note,
    };
}
