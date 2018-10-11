const BASE_A_FREQ = 440;

export function getFrequency(note, baseFrequency = BASE_A_FREQ) {
    return baseFrequency * Math.pow(2,
        ((note.noteData.semiToneDistance + note.octave.coefficient * 12) / 12)
    );
}

export const notesMap = {
    'C':  {
        name : 'C',
        semiToneDistance: -9
    },
    'C_SHARP' : {
        name : 'C#',
        semiToneDistance: -8
    },
    'D': {
        name : 'D',
        semiToneDistance: -7
    },
    'D_SHARP': {
        name : 'D#',
        semiToneDistance: -6
    },
    'E': {
        name : 'E',
        semiToneDistance: -5
    },
    'F': {
        name : 'F',
        semiToneDistance: -4
    },
    'F_SHARP': {
        name : 'F#',
        semiToneDistance: -3
    },
    'G': {
        name : 'G',
        semiToneDistance: -2
    },
    'G_SHARP': {
        name : 'G#',
        semiToneDistance: -1
    },
    'A': {
        name : 'A',
        semiToneDistance: 0
    },
    'A_SHARP': {
        name : 'A#',
        semiToneDistance: 1
    },
    'B': {
        name : 'B',
        semiToneDistance: 2
    }
};