import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {screens, screensNames} from "../../navigation/screens";
import Settings from '../../containers/Settings';
import styles from './styles';

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
            <View style={styles.containerStyle}>
                <Settings />
            </View>
        );
    }
}