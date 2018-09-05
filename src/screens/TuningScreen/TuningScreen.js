import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Tuner from '../../components/Tuner/index'
import styles from './styles';

export default class TuningScreen extends Component {
    static options(passProps) {
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
    }

    render() {
        return (
            <View style={styles.container}>
                <Tuner />
            </View>
        );
    }
}