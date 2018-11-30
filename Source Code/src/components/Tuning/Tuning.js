import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import  { styles } from './styles';

export default class Tuning extends PureComponent {
	constructor(props) {
		super(props);
	}

	renderNotes() {
        let { notes, closestNote } = this.props;

        return notes.map((note, index) => {
            let textStyleSpecific = {};

            if(note.noteData.name === closestNote.noteData.name &&
                note.octave.name === closestNote.octave.name) {
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
                    {note.noteData.name}
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