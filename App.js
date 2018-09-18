import React, { Component } from 'react';
import { Navigation } from "react-native-navigation";
import { STACK_ID } from './src/navigation/constants';
import { screens, screensNames } from "./src/navigation/screens";
import { imagesStore } from "./src/imagestore";

export default class App {
    constructor() {
        //this.setAppRoot();
        imagesStore.initStore().
            then(() => this.setAppRoot()).
                catch((error) => console.error(error));
    }

    setAppRoot() {
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
        });
    }
}