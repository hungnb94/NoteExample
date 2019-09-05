import React from 'react';
import {connect} from 'react-redux';
import AllNoteComponent from './AllNoteComponent';

const mapStateToProps = state => {
    console.log('-------->', state.noteReducer.notes);
    return {
        listData: state.noteReducer.notes,
    };
};
const AllNoteContainer = connect(
    mapStateToProps, null,
)(AllNoteComponent);

export default AllNoteContainer;
