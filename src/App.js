/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import AppContainer from './screens/AppContainer';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers, applyMiddleware(sagaMiddleware));


const App = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
};


export default App;
sagaMiddleware.run(rootSaga);
