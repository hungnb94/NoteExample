import React, {Component} from 'react'
import {View, FlatList, Text, Button} from 'react-native'
import {connect} from 'react-redux'


class AllNoteComponent extends Component {

    _renderItem = ({item}) => (
        <View>
            <Text>{item.title}</Text>
        </View>
    );

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{width: '100%'}}>
                    <Button title={"Add"} onPress={()=> {}}/>
                </View>
                <FlatList
                    maxToRenderPerBatch={5}
                    initialNumToRender={5}
                    // windowSize={}
                    // getItemCount={this.props.listData.size}
                    keyExtractor={(item, index)=> item.title + index}
                    data={this.props.listData}
                    // getItem={}
                    // updateCellsBatchingPeriod={}
                    renderItem={this._renderItem}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    listData: state.listData
});

export default connect(mapStateToProps, null) (AllNoteComponent);
