import {ADD_NOTE, EDIT_NOTE} from '../actions/type';
import {takeEvery, delay} from 'redux-saga/effects';

const TAG = "NoteSagas";

function* addNote() {
    delay(1000);
    console.log(TAG, "add note")
}

export function* watchAddNote() {
    yield takeEvery(ADD_NOTE, addNote)
}

function* editNote() {
    delay(1000);
    console.log(TAG, "edit note")
}

export function* watchEditNote() {
    yield takeEvery(EDIT_NOTE, editNote)
}
