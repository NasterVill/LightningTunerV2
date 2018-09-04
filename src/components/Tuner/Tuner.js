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

        this.audioProcessor = new AudioDummy(_.throttle((frequency) => this.setState({ frequency }), 1000));

        Permissions.request('microphone').then(response => {
            if (response === 'authorized') {
                this.audioProcessor.init();
                this.audioProcessor.run();
            }
        });

        this.state = { frequency: 0, tuning: ['E', 'A', 'D', 'G', 'B', 'Eʰ'] };
    }

    computePos() {
        return this.state.frequency / 5;
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
        this.audioProcessor.stop();
    }
};













//"react-native-audio-processing": "git+https://github.com/NasterVill/RNAudioProcessingModule.git",

/*export default class Tuner extends Component {
    constructor(props) {
        super(props);

        Permissions.request('microphone').then(response => {
            if (response === 'authorized') {
                JAudioProcessor.init();
                JAudioProcessor.run();
            }
        });

        this.state = { frequency: 0 };
    }

    setFrequency = _.throttle(({ frequency }) => this.setState({ frequency }), 10000);

    componentDidMount() {
        DeviceEventEmitter.addListener(
            JAudioProcessor.FREQUENCY_DETECTED_EVENT_NAME,
            this.setFrequency
        );
    }

	computePos() {
        return this.state.frequency / 5;
    }

	render() {
        let { textStyle, tuningStyle, tunerViewStyle } = styles;

		let { frequency } = this.state;
        frequency = Math.round(frequency * FREQ_PRECISION) / FREQ_PRECISION;

        console.log(frequency);

		return (
			<View style={{flex: 1, alignSelf: 'stretch'}}>
				<Tuning style={tuningStyle} />
				<MeasuringScale
					style={tunerViewStyle}
                    divisionAmount={20}
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


/*
export default class Tuner extends Component {
	constructor(props) {
		super(props);

		this.audioProcessor = new AudioDummy(_.throttle((frequency) => this.setState({ frequency }), 2000));

		Permissions.request('microphone').then(response => {
			if (response === 'authorized') {
				this.audioProcessor.init();
				this.audioProcessor.run();
			}
		});

		this.state = { frequency: 0 };
	}

	computePos() {
        return this.state.frequency / 5;
    }

	render() {
        let { textStyle, tuningStyle, tunerViewStyle } = styles;

		let { frequency } = this.state;
        frequency = Math.round(frequency * FREQ_PRECISION) / FREQ_PRECISION;

		return (
			<View style={{flex: 1, alignSelf: 'stretch'}}>
				<Tuning style={tuningStyle} />
				<MeasuringScale
					style={tunerViewStyle}
                    divisionAmount={20}
					toPos={this.computePos()}
				/>
				<Text style={textStyle}>{frequency} Hz</Text>
			</View>
		);
	}

	componentWillUnmount() {
		this.audioProcessor.stop();
	}
};
*/