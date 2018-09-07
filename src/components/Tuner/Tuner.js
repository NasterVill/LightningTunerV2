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
const DELAY = 500;

export default class Tuner extends Component {
    constructor(props) {
        super(props);

        Permissions.request('microphone').then(response => {
            if (response === 'authorized') {
                JAudioProcessor.start();
            }
        });

        this.state = {
            tuning: {
                name: 'Standard',
                notes: [
                    { noteData: notesMap.E, octave: octaves.GREAT },
                    { noteData: notesMap.A, octave: octaves.GREAT },
                    { noteData: notesMap.D, octave: octaves.SMALL },
                    { noteData: notesMap.G, octave: octaves.SMALL },
                    { noteData: notesMap.B, octave: octaves.SMALL },
                    { noteData: notesMap.E, octave: octaves.ONE_LINED }
                ]
            },
            frequency: 0
        };
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
        console.log('current:' , currentFrequency,'base:', baseFrequency, 'division:', currentFrequency / baseFrequency, 'log2:', this.log2(currentFrequency / baseFrequency));

        let cents = currentFrequency > 0 ? (1200 * this.log2(currentFrequency / baseFrequency)) : 0;

        let pos = cents / 2 + (UNIT_INTERVALS_AMOUNT / 2);

        if (pos > 100) pos = 100;
        if (pos < 0) pos = 0;

        console.log(cents, pos);

        return pos;
    }

    getClosestNoteIndex() {
        const { frequency } = this.state;
        if(frequency === 0) return 0;

        let closestNoteIndex = -1;
        let optimalDifference = Number.MAX_VALUE;

        this.state.tuning.notes.forEach((note, index) => {
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

        let { frequency, tuning } = this.state;
        frequency = Math.round(frequency * FREQ_PRECISION) / FREQ_PRECISION;

        const closestNote = tuning.notes[this.getClosestNoteIndex()];
        const closestFrequency = Math.round(getFrequency(closestNote) * FREQ_PRECISION) / FREQ_PRECISION;
        const pos = this.computePos(closestFrequency, frequency);

        return (
            <View style={[{flex: 1, alignSelf: 'stretch'}, this.props.style]}>
                <Tuning
                    style={tuningStyle}
                    notes={tuning.notes}
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

/*const mapStateToProps = ({ tuning }) => {
    return  { tuning };
};

export default connect(mapStateToProps)(Tuner);*/



//"react-native-audio-processing": "git+https://github.com/NasterVill/RNAudioProcessingModule.git",
