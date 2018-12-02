import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import I18n from '../../i18n';
import  { styles } from './styles';

export default class Tuning extends PureComponent {
	constructor(props) {
		super(props);
	}

	renderNotes() {
        let { notes, closestNote, locale } = this.props;

        return notes.map((note, index) => {
            let textStyleSpecific = {};

            if(note.noteData.nameKey === closestNote.noteData.nameKey &&
                note.octave.name === closestNote.octave.name) {
                textStyleSpecific = {
                    fontSize: 26,
                    color: '#e8cd20',
                };
            }

            return (
                <Text
                    style={[styles.textStyle, textStyleSpecific]}
                    key={index}
                >
                    {I18n.t(note.noteData.nameKey, { locale })}
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