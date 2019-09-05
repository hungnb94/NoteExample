import {all} from 'redux-saga/effects';
import {watchAddNote, watchEditNote} from './noteSagas';

export default function* rootSaga() {
    yield all([
        watchAddNote(),
        watchEditNote()
    ])
}
