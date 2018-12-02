import I18n from '../i18n';
import { notesMap } from './notes';
import { octaves } from './octaves';

export function tuningToString(tuning, locale) {
    let { name, notes } = tuning;

    return `${name} (${notes.map((note, index) => {
        console.log(tuning, note.noteData.nameKey, locale, I18n.t(note.noteData.nameKey, { locale }));
        return index === 0 ? I18n.t(note.noteData.nameKey, { locale }) : ` ${I18n.t(note.noteData.nameKey, { locale })}`;
    })})`;
}

export function getDefaultTunings() {
    return {
        'STANDARD': {
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
        'STANDARD_D': {
            name: 'Standard D',
            notes: [
                { noteData: notesMap.D, octave: octaves.GREAT },
                { noteData: notesMap.G, octave: octaves.GREAT },
                { noteData: notesMap.C, octave: octaves.SMALL },
                { noteData: notesMap.F, octave: octaves.SMALL },
                { noteData: notesMap.A, octave: octaves.SMALL },
                { noteData: notesMap.D, octave: octaves.ONE_LINED }
            ]
        },
        'STANDARD_C': {
            name: 'Standard C',
            notes: [
                { noteData: notesMap.C, octave: octaves.GREAT },
                { noteData: notesMap.F, octave: octaves.GREAT },
                { noteData: notesMap.A_SHARP, octave: octaves.SMALL },
                { noteData: notesMap.D_SHARP, octave: octaves.SMALL },
                { noteData: notesMap.G, octave: octaves.SMALL },
                { noteData: notesMap.C, octave: octaves.ONE_LINED }
            ]
        },
        'DROP_D': {
            name: 'Drop D',
            notes: [
                { noteData: notesMap.D, octave: octaves.GREAT },
                { noteData: notesMap.A, octave: octaves.GREAT },
                { noteData: notesMap.D, octave: octaves.SMALL },
                { noteData: notesMap.G, octave: octaves.SMALL },
                { noteData: notesMap.B, octave: octaves.SMALL },
                { noteData: notesMap.E, octave: octaves.ONE_LINED }
            ]
        },
        'DROP_C': {
            name: 'Drop C',
            notes: [
                { noteData: notesMap.C, octave: octaves.GREAT },
                { noteData: notesMap.G, octave: octaves.GREAT },
                { noteData: notesMap.C, octave: octaves.SMALL },
                { noteData: notesMap.F, octave: octaves.SMALL },
                { noteData: notesMap.A, octave: octaves.SMALL },
                { noteData: notesMap.D, octave: octaves.ONE_LINED }
            ]
        },
    }
}
