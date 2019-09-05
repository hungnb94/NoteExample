import {ADD_NOTE, DELETE_NOTE, EDIT_NOTE} from '../actions/type';

const initialState = {
    notes: [
        {id: 1, title: 'First note'},
        {id: 2, title: 'Second note'},
        {id: 3, title: 'Third note'},
    ],
};

export default function (state = initialState, action) {
    let list = state.notes;
    let note = action.data;
    switch (action.type) {
        case ADD_NOTE:
            console.log('Add note');
            if (list.length > 0) {
                const last = list[list.length - 1];
                note.id = last.id + 1;
            } else {
                note.id = 1;
            }
            return {...state, notes: [...list, note]};
        case EDIT_NOTE:
            console.log('Edit note');
            return {
                ...state,
                notes: list.map(item => item.id === note.id ?
                    note :
                    item
                )
            };
        case DELETE_NOTE:
            console.log('Delete note');
            return {
                ...state,
                notes: list.filter(item => item.id !== note.id)
            };
        default:
            return state;
    }
}
