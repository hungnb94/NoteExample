import React from 'react';
import {connect} from 'react-redux';
import AllNoteComponent from './AllNoteComponent';
import {deletePost, fetchPosts} from '../../actions';

const mapStateToProps = state => {
    console.log('AllNoteContainer', state.noteReducer.notes);
    return {
        listData: state.noteReducer.notes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDeletePost: (note) => {
            dispatch(deletePost(note))
        },
        onFetchPosts: () => {
            dispatch(fetchPosts())
        }
    }
};

const AllNoteContainer = connect(
    mapStateToProps, mapDispatchToProps,
)(AllNoteComponent);

export default AllNoteContainer;
