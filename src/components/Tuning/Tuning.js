import React, { Component } from 'react';
import { View, Text } from 'react-native';
import  { styles } from './styles';

export default class Tuning extends Component {
	constructor(props) {
		super(props);
	}

	renderNotes() {
        return this.props.notes.map((currentValue, index) => {
            let textStyleSpecific = {};

            if(this.props.closestNote === currentValue) {
                textStyleSpecific = {
                    fontSize: 26,
                    color: '#dec50c',
                };
            }

            return <Text style={[styles.textStyle, textStyleSpecific]} key={index}>{currentValue}</Text>;
        });
	}

	render() {
		return (
			<View style={[styles.containerStyle, this.props.style]}>
                {this.renderNotes()}
			</View>
		);
	}
}