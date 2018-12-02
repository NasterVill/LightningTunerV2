import App from './App';
import React from 'react';
import { Navigation } from "react-native-navigation";
import { persistStore } from 'redux-persist';
import registerScreens from './src/navigation/registerScreens';
import { configureStore } from './src/store/configureStore';

Navigation.events().registerAppLaunchedListener(() => {
    const reduxStore = configureStore();
    persistStore(reduxStore, null, () => {
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
});