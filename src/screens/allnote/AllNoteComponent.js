import React, {Component} from 'react';
import {View, FlatList, Text, Button, TouchableOpacity} from 'react-native';

const TAG = 'AllNoteComponent';

class AllNoteComponent extends Component {

    _renderItem = ({item}) => (
        <View key={item.id.toString()}>
            <TouchableOpacity
                onPress={() => this._clickItem(item)}>
                <Text style={{flex: 1, fontSize: 25}}>{item.id + '-' + item.title}</Text>
                <TouchableOpacity
                    onPress={() => this._clickDelete(item)}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );

    _clickAdd = () => {
        this.props.navigation.navigate('Details');
    };

    _clickItem(item) {
        console.log(TAG, 'click item: ' + item.title);
        this.props.navigation.navigate('Details', {'data': item});
    }

    _clickDelete(item) {
        console.log(TAG, 'Delete item', item.title);
        this.props.onDeleteNote(item)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{width: '100%', marginBottom: 20}}>
                    <Button title={'Add'} onPress={this._clickAdd}/>
                </View>
                <FlatList
                    maxToRenderPerBatch={5}
                    initialNumToRender={5}
                    // windowSize={}
                    // getItemCount={this.props.listData.size}
                    keyExtractor={(item, index) => item.title + index}
                    data={this.props.listData}
                    // getItem={}
                    // updateCellsBatchingPeriod={}
                    renderItem={this._renderItem}/>
            </View>
        );
    }
}

export default AllNoteComponent;
