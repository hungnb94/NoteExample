import {connect} from 'react-redux'
import NoteDetailComponent from './NoteDetailComponent';
import {addNote, editPost} from '../../actions';


const mapDispatchToProps = dispatch => {
    return {
        onAddNote: (note) => {
            dispatch(addNote(note))
        },
        onEditPost: (note) => {
            dispatch(editPost(note))
        }
    }
};

const NoteDetailContainer = connect(
    null,
    mapDispatchToProps
)(NoteDetailComponent);

export default NoteDetailContainer;
