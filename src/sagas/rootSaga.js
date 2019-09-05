import {all, call} from 'redux-saga/effects';
import {watchAddNote, watchEditNote} from './noteSagas';

export default function* rootSaga() {
    yield all([
        call(watchAddNote),
        call(watchEditNote)
    ])
}
