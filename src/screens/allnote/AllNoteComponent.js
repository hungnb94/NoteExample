import React, {Component} from 'react';
import {View, FlatList, Text, Button, TouchableHighlight} from 'react-native';

const TAG = 'AllNoteComponent';

class AllNoteComponent extends Component {

    _renderItem = ({item}) => (
        <View>
            <Button key={item.id.toString()}
                title={item.id + '-' + item.title}
                onPress={() => this.clickItem(item)}/>
        </View>
    );

    _clickAdd = () => {
        this.props.navigation.navigate('Details');
    };

    clickItem(item) {
        console.log(TAG, "click item: " + item.title);
        this.props.navigation.navigate('Details', {'data': item});
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
