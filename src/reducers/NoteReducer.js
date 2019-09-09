import {ADD_POST_SUCCESS, DELETE_POST_SUCCESS, EDIT_POST_SUCCESS, FETCH_POSTS_SUCCESS} from '../actions/type';

const initialState = {
    notes: [
    ],
};

const TAG = 'NoteReducer';

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            console.log(TAG, 'Get posts success');
            return {
                ...state,
                notes: action.data
            };
        case DELETE_POST_SUCCESS:
            console.log(TAG, 'Delete post success');
            return {
                ...state,
                notes: state.notes.filter(item => item.id !== action.data.id)
            };
        case EDIT_POST_SUCCESS:
            console.log(TAG, 'Edit post success');
            return {
                ...state,
                notes: state.notes.map(item => item.id === action.data.id ?
                    action.data :
                    item
                )
            };
        case ADD_POST_SUCCESS:
            console.log(TAG, 'Add post success', action.data);
            return {
                ...state,
                notes: [...state.notes, action.data]
            };
        default:
            return state;
    }
}
