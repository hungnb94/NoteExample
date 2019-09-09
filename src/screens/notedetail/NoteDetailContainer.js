import {connect} from 'react-redux'
import NoteDetailComponent from './NoteDetailComponent';
import {addPost, editPost} from '../../actions';


const mapDispatchToProps = dispatch => {
    return {
        onAddPost: (note) => {
            dispatch(addPost(note))
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
