import React, { Component } from 'react';
import { View } from 'react-native';
import Tuner from '../../components/Tuner/index'
import { screens, screensNames } from "../../../src/navigation/screens";
import styles from './styles';

export class TuningScreen extends Component {
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