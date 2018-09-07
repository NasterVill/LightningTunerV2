import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Tuner from '../../components/Tuner/index'
import { screens, screensNames } from "../../../src/navigation/screens";
import styles from './styles';

export class TuningScreen extends Component {
    static options(passProps) {
        return {
            topBar: {
                title: {
                    text: screens[screensNames.TuningScreen].title,
                }
            }
        };
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Tuner />
            </View>
        );
    }
}