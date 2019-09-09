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
    ADD_POST_SUCCESS,
    ADD_POST_REQUEST,
    ADD_POST_FAILED
} from '../actions/type';
import {takeEvery, put, call} from 'redux-saga/effects';
import {fetchPostsApi, deletePostApi, updatePostApi, addPostApi} from '../apis/noteApi';

const TAG = "NoteSagas";

export function* addPost(action) {
    try {
        const post = yield call(addPostApi, action.data.name);
        console.log(TAG, "Add post success");
        yield put({...action, type: ADD_POST_SUCCESS, data: post.data})
    } catch (error) {
        console.log(TAG, "Add post failed");
        yield put({...action, type: ADD_POST_FAILED})
    }
}

export function* watchAddPost() {
    yield takeEvery(ADD_POST_REQUEST, addPost)
}

export function* editPost(action) {
    try {
        const post = yield call(updatePostApi, action.data.id, action.data.name);
        console.log(TAG, "Update post success");
        yield put({...action, type: EDIT_POST_SUCCESS, data: post})
    } catch (error) {
        console.log(TAG, "Update post failed");
        yield put({...action, type: EDIT_POST_FAILED})
    }
}

export function* watchEditPost() {
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
