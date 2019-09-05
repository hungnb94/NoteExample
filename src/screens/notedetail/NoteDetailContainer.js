import {connect} from 'react-redux'
import NoteDetailComponent from './NoteDetailComponent';
import {addNote, editNote} from '../../actions';


const mapDispatchToProps = dispatch => {
    return {
        onAddNote: (note) => {
            dispatch(addNote(note))
        },
        onEditNote: (note) => {
            dispatch(editNote(note))
        }
    }
};

const NoteDetailContainer = connect(
    null,
    mapDispatchToProps
)(NoteDetailComponent);

export default NoteDetailContainer;
