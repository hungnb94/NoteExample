import {ADD_NOTE, ADD_NOTE_SAGA, DELETE_NOTE, DELETE_NOTE_SAGA, EDIT_NOTE, EDIT_NOTE_SAGA} from '../actions/type';
import {takeEvery, delay, put} from 'redux-saga/effects';

const TAG = "NoteSagas";

export function* addNote(action) {
    console.log(TAG, "add note");
    yield delay(3000);
    yield put({...action, type: ADD_NOTE});
}

export function* watchAddNote() {
    yield takeEvery(ADD_NOTE_SAGA, addNote)
}

export function* editNote(action) {
    console.log(TAG, "edit note");
    yield delay(3000);
    yield put({...action, type: EDIT_NOTE});
}

export function* watchEditNote() {
    yield takeEvery(EDIT_NOTE_SAGA, editNote)
}

export function* deleteNote(action) {
    console.log(TAG, "delete note");
    yield delay(3000);
    yield put({...action, type: DELETE_NOTE});
}

export function* watchDeleteNote() {
    yield takeEvery(DELETE_NOTE_SAGA, deleteNote)
}
