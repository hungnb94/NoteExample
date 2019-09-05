/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import AppContainer from './screens/AppContainer';

let store = createStore(reducers);


const App = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
};


export default App;
