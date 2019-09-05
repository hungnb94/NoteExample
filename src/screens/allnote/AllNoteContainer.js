import React from 'react';
import {connect} from 'react-redux';
import AllNoteComponent from './AllNoteComponent';
import {addNote, deleteNote, editNote} from '../../actions';

const mapStateToProps = state => {
    console.log('-------->', state.noteReducer.notes);
    return {
        listData: state.noteReducer.notes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteNote: (note) => {
            dispatch(deleteNote(note))
        }
    }
};

const AllNoteContainer = connect(
    mapStateToProps, mapDispatchToProps,
)(AllNoteComponent);

export default AllNoteContainer;
