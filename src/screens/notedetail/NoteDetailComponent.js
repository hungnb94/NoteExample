import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const TAG = 'NoteDetailComponent';

class NoteDetailComponent extends Component {
    constructor(props) {
        super(props);

        const {navigation} = this.props;
        let note = navigation.getParam('data');
        if (note != null) {
            this.state = {
                id: note.id,
                text: note.name
            }
        } else {
            this.state = {
                id: -1,
                text: '',
            };
        }
    }

    _clickSave = () => {
        const text = this.state.text;
        console.log(TAG, "Save title: ", text);
        let id = this.state.id;
        if (id === -1) {
            this.props.onAddPost({name: text});
        } else {
            this.props.onEditPost({id: id, name: text})
        }
        this.props.navigation.goBack();
    };

    _onTextChange = (text) => {
        this.setState({text})
    };

    render() {
        console.log(TAG, 'render detail');
        return (
            <View style={{flex: 1}}>
                <Text>{this.props.id}</Text>
                <TextInput
                    placeholder={'Title'}
                    onChangeText={this._onTextChange}
                    value={this.state.text}
                />
                <View style={{width: '100%'}}>
                    <Button title={'Save'} onPress={this._clickSave}/>
                </View>
            </View>
        );
    }
}

export default (NoteDetailComponent);
