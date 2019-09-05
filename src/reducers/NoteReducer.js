import {ADD_NOTE, DELETE_POST_SUCCESS, EDIT_NOTE, FETCH_POSTS_SUCCESS} from '../actions/type';

const initialState = {
    notes: [
    ],
};

export default function (state = initialState, action) {
    switch (action.type) {
        // case EDIT_NOTE:
        // console.log('Edit note');
        // return {
        //     ...state,
        //     notes: list.map(item => item.id === note.id ?
        //         note :
        //         item
        //     )
        // };
        case DELETE_POST_SUCCESS:
            console.log('Delete post success');
            return {
                ...state,
                notes: state.notes.filter(item => item.id !== action.data.id)
            };
        case FETCH_POSTS_SUCCESS:
            console.log('Get posts success');
            return {
                ...state,
                notes: action.data
            };
        default:
            return state;
    }
}
