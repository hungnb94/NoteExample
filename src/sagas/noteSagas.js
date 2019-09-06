import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILED,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILED,
    EDIT_POST_REQUEST,
    EDIT_POST_SUCCESS,
    EDIT_POST_FAILED,
    ADD_NOTE,
    ADD_NOTE_SAGA,
} from '../actions/type';
import {takeEvery, delay, put, call} from 'redux-saga/effects';
import {fetchPostsApi, deletePostApi, updatePostApi} from '../apis/noteApi';

const TAG = "NoteSagas";

export function* addNote(action) {
    console.log(TAG, "add note");
    yield delay(3000);
    yield put({...action, type: ADD_NOTE});
}

export function* watchAddNote() {
    yield takeEvery(ADD_NOTE_SAGA, addNote)
}

export function* editPost(action) {
    try {
        yield call(updatePostApi, action.data.id, action.data.name);
        console.log(TAG, "Update post success");
        yield put({...action, type: EDIT_POST_SUCCESS})
    } catch (error) {
        console.log(TAG, "Update post failed");
        yield put({...action, type: EDIT_POST_FAILED})
    }
}

export function* watchEditNote() {
    yield takeEvery(EDIT_POST_REQUEST, editPost)
}

export function* deletePostSaga(action) {
    try {
        yield call(deletePostApi, action.data.id);
        console.log(TAG, "Delete post success");
        yield put({...action, type: DELETE_POST_SUCCESS})
    } catch (error) {
        console.log(TAG, "Delete post failed");
        yield put({...action, type: DELETE_POST_FAILED})
    }
}

export function* watchDeleteNote() {
    yield takeEvery(DELETE_POST_REQUEST, deletePostSaga)
}

export function* fetchPostSaga() {
    try {
        const posts = yield call(fetchPostsApi);
        console.log(TAG, "Fetch data success");
        yield put({type: FETCH_POSTS_SUCCESS, data: posts})
    } catch (error) {
        console.log(TAG, "Fetch data failed");
        yield put({type: FETCH_POSTS_FAILED})
    }
}

export function* watchFetchPost() {
    yield takeEvery(FETCH_POSTS_REQUEST, fetchPostSaga)
}
