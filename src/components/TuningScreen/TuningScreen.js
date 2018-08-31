//import JAudioProcessor from 'react-native-audio-processing';
import React, { Component } from 'react'
import { DeviceEventEmitter, View, Text } from 'react-native';
import Permissions from 'react-native-permissions';
import _ from 'lodash';
import AudioDummy from '../../audioprocessing/AudioDummy';
import Tuning from '../Tuning/Tuning';
import MeasuringScale from '../MeasuringScale';
import { styles } from './styles';

const FREQ_PRECISION = 100;

export default class TuningScreen extends Component {
	constructor(props) {
		super(props);

		this.audioProcesor = new AudioDummy(_.throttle((frequency) => this.setState({ frequency }), 2000));

		Permissions.request('microphone').then(response => {
			if (response === 'authorized') {
				this.audioProcesor.init();
				this.audioProcesor.run();
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
		this.audioProcesor.stop();
	}
};













//"react-native-audio-processing": "git+https://github.com/NasterVill/RNAudioProcessingModule.git",

/*export default class TuningScreen extends Component {
	constructor(props) {
		super(props);

		Permissions.request('microphone').then(response => {
			if (response == 'authorized') {
				JAudioProcessor.init();
				JAudioProcessor.run();
			}
		});

		this.state = { frequency: 0 };
	}

	setFrequency = _.throttle(({ frequency }) => this.setState({ frequency }), 250);

	componentDidMount() {
		DeviceEventEmitter.addListener(
			JAudioProcessor.FREQUENCY_DETECTED_EVENT_NAME,
			this.setFrequency
		);
	}

	componentDidCatch(error, errorInfo) {
		console.log('componentDidCatch ', error, errorInfo);
	}

	render() {
		const { frequency } = this.state;

		console.log('render:', frequency);

		return (
			<View>
				<Text>{frequency}</Text>
			</View>
		);
	}

	componentWillUnmount() {
		JAudioProcessor.stop();
	}
}

const styles = {
		textStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'black',
	}
}*/