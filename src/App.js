/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import AllNoteContainer from './screens/allnote/AllNoteContainer';
import AllNoteComponent from './screens/allnote/AllNoteComponent';

let store = createStore(reducers);

const AppNavigator = createStackNavigator({
  Home: {
    screen: AllNoteComponent
  }
});

const AppContainer =  createAppContainer(AppNavigator);

const App = () => {
    return (
        <Provider store={store}>
          <AppContainer/>
        </Provider>
    );
};



export default App;
