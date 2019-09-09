import {all} from 'redux-saga/effects';
import {watchAddPost, watchDeleteNote, watchEditPost, watchFetchPost} from './noteSagas';

export default function* rootSaga() {
    yield all([
        watchFetchPost(),
        watchDeleteNote(),
        watchEditPost(),
        watchAddPost(),
    ])
}
