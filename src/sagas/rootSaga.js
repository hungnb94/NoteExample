import {all} from 'redux-saga/effects';
import {watchAddNote, watchDeleteNote, watchEditNote, watchFetchPost} from './noteSagas';

export default function* rootSaga() {
    yield all([
        watchFetchPost(),
        watchDeleteNote(),
        watchEditNote(),
        watchAddNote(),
    ])
}
