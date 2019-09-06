import {ADD_NOTE, DELETE_POST_SUCCESS, EDIT_POST_SUCCESS, FETCH_POSTS_SUCCESS} from '../actions/type';

const initialState = {
    notes: [
    ],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            console.log('Get posts success');
            return {
                ...state,
                notes: action.data
            };
        case DELETE_POST_SUCCESS:
            console.log('Delete post success');
            return {
                ...state,
                notes: state.notes.filter(item => item.id !== action.data.id)
            };
        case EDIT_POST_SUCCESS:
            console.log('Edit post success');
            return {
                ...state,
                notes: state.notes.map(item => item.id === action.data.id ?
                    action.data :
                    item
                )
            };
        default:
            return state;
    }
}
