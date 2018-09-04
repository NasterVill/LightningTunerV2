import React, { Component } from 'react';
import { View, Text } from 'react-native';
import  { styles } from './styles';

export default class Tuning extends Component {
	constructor(props) {
		super(props);
	}

	renderNotes() {
        return this.props.notes.map((note, index) => {
            let textStyleSpecific = {};

            if(note === this.props.closestNote) {
                textStyleSpecific = {
                    fontSize: 26,
                    color: '#dec50c',
                };
            }

            return (
                <Text
                    style={[styles.textStyle, textStyleSpecific]}
                    key={index}
                >
                    {note}
                </Text>
            );
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