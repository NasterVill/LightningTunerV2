import JAudioProcessor from 'react-native-audio-processing';
import React, { Component } from 'react'
import { DeviceEventEmitter, View, Text } from 'react-native';
import Permissions from 'react-native-permissions';
import _ from 'lodash';
import { connect } from 'react-redux';
import Tuning from '../Tuning';
import { MeasuringScale, UNIT_INTERVALS_AMOUNT } from '../MeasuringScale';
import { styles } from './styles';
import { notesMap, octaves, getFrequency } from "../../musicdata";

const FREQ_PRECISION = 100;

class Tuner extends Component {
    constructor(props) {
        super(props);

        Permissions.request('microphone').then(response => {
            if (response === 'authorized') {
                JAudioProcessor.start();
            }
        });

        this.state = { frequency: 0 };
    }

    setFrequency = ({ frequency }) => this.setState({frequency});

    componentDidMount() {
        DeviceEventEmitter.addListener(
            JAudioProcessor.FREQUENCY_DETECTED_EVENT_NAME,
            this.setFrequency
        );
    }

    log2(value) {
        return Math.log(value) / Math.log(2);
    }

    computePos(baseFrequency, currentFrequency) {
        const cents = currentFrequency > 0 ? (1200 * this.log2(currentFrequency / baseFrequency)) : 0;
        let pos = cents / 2 + (UNIT_INTERVALS_AMOUNT / 2);

        if (pos > 100) pos = 100;
        if (pos < 0) pos = 0;

        return pos;
    }

    getClosestNoteIndex() {
        const { frequency } = this.state;
        if(frequency === 0) return 0;

        let closestNoteIndex = -1;
        let optimalDifference = Number.MAX_VALUE;

        this.props.currentTuning.notes.forEach((note, index) => {
            let difference = Math.abs((frequency - getFrequency(note)));
            if (difference < optimalDifference) {
                closestNoteIndex = index;
                optimalDifference = difference;
            }
        });

        return closestNoteIndex;
    }

    render() {
        const { textStyle, tuningStyle, tunerViewStyle } = styles;

        let { currentTuning, style } = this.props;

        let { frequency } = this.state;
        frequency = Math.round(frequency * FREQ_PRECISION) / FREQ_PRECISION;

        const closestNote = currentTuning.notes[this.getClosestNoteIndex()];
        const closestFrequency = Math.round(getFrequency(closestNote) * FREQ_PRECISION) / FREQ_PRECISION;
        const pos = this.computePos(closestFrequency, frequency);

        return (
            <View style={[{flex: 1, alignSelf: 'stretch'}, style]}>
                <Tuning
                    style={tuningStyle}
                    notes={currentTuning.notes}
                    closestNote={closestNote}
                />
                <MeasuringScale
                    style={tunerViewStyle}
                    divisionAmount={20}
                    leftLabel="-100c"
                    centralLabel={closestFrequency}
                    rightLabel="+100c"
                    toPos={pos}
                />
                <Text style={textStyle}>{frequency} Hz</Text>
            </View>
        );
    }

    componentWillUnmount() {
        JAudioProcessor.stop();
    }
}

const mapStateToProps = ({ currentTuning }) => {
    return  { currentTuning };
};

export default connect(mapStateToProps)(Tuner);


//"react-native-audio-processing": "git+https://github.com/NasterVill/RNAudioProcessingModule.git",
