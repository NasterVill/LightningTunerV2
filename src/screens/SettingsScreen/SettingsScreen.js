import React, { Component } from 'react';
import { View } from 'react-native';
import {screens, screensNames} from "../../navigation/screens";

export class SettingsScreen extends Component {
    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: screens[screensNames.SettingsScreen].title,
                }
            }
        };
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
            </View>
        );
    }
}