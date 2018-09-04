import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Tuner from '../../components/Tuner/index'
import styles from './styles';

export default class TuningScreen extends Component {
    static options(passProps) {
        console.log('options called!');

        return {
            topBar: {
                title: {
                    text: 'LightningTuner',
                    fontSize: 20,
                    color: '#FFFFFF',
                },
                background: {
                    color: '#3F51B5'
                },
                drawBehind: false,
                visible: true
            }
        };
    }

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Tuner />
            </View>
        );
    }
}