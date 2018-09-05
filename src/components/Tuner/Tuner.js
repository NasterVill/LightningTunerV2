import JAudioProcessor from 'react-native-audio-processing';
import React, { Component } from 'react'
import { DeviceEventEmitter, View, Text } from 'react-native';
import Permissions from 'react-native-permissions';
import _ from 'lodash';
import AudioDummy from '../../audioprocessing/AudioDummy';
import Tuning from '../Tuning';
import MeasuringScale from '../MeasuringScale';
import { styles } from './styles';

const FREQ_PRECISION = 100;

export default class Tuner extends Component {
    constructor(props) {
        super(props);

        Permissions.request('microphone').then(response => {
            if (response === 'authorized') {
                JAudioProcessor.start();
            }
        });

        this.state = { frequency: 0, tuning: ['E', 'A', 'D', 'G', 'B', 'Eʰ'] };
    }

    setFrequency = ({ frequency }) => this.setState({ frequency });

    componentDidMount() {
        DeviceEventEmitter.addListener(
            JAudioProcessor.FREQUENCY_DETECTED_EVENT_NAME,
            this.setFrequency
        );
    }

    computePos() {
        return this.state.frequency / 13;
    }

    getClosestNote() {
        return this.state.tuning[Math.round(this.state.frequency / 100)];
    }

    render() {
        const { textStyle, tuningStyle, tunerViewStyle } = styles;

        let { frequency } = this.state;
        frequency = Math.round(frequency * FREQ_PRECISION) / FREQ_PRECISION;

        return (
            <View style={[{flex: 1, alignSelf: 'stretch'}, this.props.style]}>
                <Tuning
                    style={tuningStyle}
                    notes={this.state.tuning}
                    closestNote={this.getClosestNote()}
                />
                <MeasuringScale
                    style={tunerViewStyle}
                    divisionAmount={20}
                    leftLabel="-50c"
                    centralLabel="249.99"
                    rightLabel="+50c"
                    toPos={this.computePos()}
                />
                <Text style={textStyle}>{frequency} Hz</Text>
            </View>
        );
    }

    componentWillUnmount() {
        JAudioProcessor.stop();
    }
};













































//"react-native-audio-processing": "git+https://github.com/NasterVill/RNAudioProcessingModule.git",

/*export default class Tuner extends Component {
    constructor(props) {
        super(props);

        Permissions.request('microphone').then(response => {
            if (response === 'authorized') {
                JAudioProcessor.start();
                console.log(JAudioProcessor, 'in constructor');
            }
        });

        this.state = { frequency: 0, tuning: ['E', 'A', 'D', 'G', 'B', 'Eʰ'] };
    }

    setFrequency = _.throttle(({ frequency }) => console.log(frequency) || this.setState({ frequency }), 1000);

    componentDidMount() {
        console.log('tuner did mount');
        DeviceEventEmitter.addListener(
            JAudioProcessor.FREQUENCY_DETECTED_EVENT_NAME,
            this.setFrequency
        );

    }

    computePos() {
        return this.state.frequency / 13;
    }

    getClosestNote() {
        return this.state.tuning[Math.round(this.state.frequency / 100)];
    }

    render() {
        console.log('render');
        const { textStyle, tuningStyle, tunerViewStyle } = styles;

        let { frequency } = this.state;
        frequency = Math.round(frequency * FREQ_PRECISION) / FREQ_PRECISION;

        return (
            <View style={[{flex: 1, alignSelf: 'stretch'}, this.props.style]}>
                <Tuning
                    style={tuningStyle}
                    notes={this.state.tuning}
                    closestNote={this.getClosestNote()}
                />
                <MeasuringScale
                    style={tunerViewStyle}
                    divisionAmount={20}
                    leftLabel="-50c"
                    centralLabel="249.99"
                    rightLabel="+50c"
                    toPos={this.computePos()}
                />
                <Text style={textStyle}>{frequency} Hz</Text>
            </View>
        );
    }

    componentWillUnmount() {
        JAudioProcessor.stop();
    }
};*/