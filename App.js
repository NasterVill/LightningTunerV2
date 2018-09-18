import React from 'react';
import { Navigation } from "react-native-navigation";
import { STACK_ID } from './src/navigation/constants';
import { screens, screensNames } from "./src/navigation/screens";
import { imagesStore } from "./src/imagestore";
import {createStore} from 'redux';
import registerScreens from "./src/navigation/registerScreens";
import rootReducer from './src/reducers'

const reduxStore = createStore(rootReducer);
registerScreens(reduxStore);

Navigation.events().registerAppLaunchedListener(() => {
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
});

export default class App {
    constructor() {
        imagesStore.initStore()
            .then(this.setAppRoot)
            .catch(console.error);
    }

    setAppRoot() {
        Navigation.setRoot({
            root: {
                stack: {
                    id: STACK_ID,
                    children: [
                        {
                            component: {
                                name: screens[screensNames.TuningScreen].id
                            }
                        }
                    ],
                }
            }
        });
    }
}