import {notesMap} from "./notes";
import {octaves} from "./octaves";

export function getDefaultTunings(){
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
            name: 'Standard_C',
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
            name: 'Drop_D',
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
            name: 'Drop_C',
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
