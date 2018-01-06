/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Navigator } from './src/navigation/Navigator';
import store from './src/store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}
