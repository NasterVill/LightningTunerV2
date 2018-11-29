import App from './App';
import React from 'react';
import { Navigation } from "react-native-navigation";
import { createStore } from 'redux';
import registerScreens from './src/navigation/registerScreens';
import rootReducer from './src/reducers'

Navigation.events().registerAppLaunchedListener(() => {
    const reduxStore = createStore(rootReducer);
    registerScreens(reduxStore);

    Navigation.setDefaultOptions({
        topBar: {
            title: {
                fontSize: 20,
                color: '#FFFFFF',
            },
            background: {
                color: '#3F51B5'
            },
            backButton: {
                color: 'white'
            },
            drawBehind: false,
            visible: true,
        }
    });

    const app = new App();
});