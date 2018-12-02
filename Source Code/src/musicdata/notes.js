const BASE_A_FREQ = 440;

export function getFrequency(note, baseFrequency = BASE_A_FREQ) {
    return baseFrequency * Math.pow(2,
        ((note.noteData.semiToneDistance + note.octave.coefficient * 12) / 12)
    );
}

export const notesMap = {
    'C':  {
        nameKey: "general.notes.C",
        semiToneDistance: -9
    },
    'C_SHARP' : {
        nameKey: "general.notes.C",
        semiToneDistance: -8
    },
    'D': {
        nameKey: "general.notes.D",
        semiToneDistance: -7
    },
    'D_SHARP': {
        nameKey: "general.notes.D_SHARP",
        semiToneDistance: -6
    },
    'E': {
        nameKey: "general.notes.E",
        semiToneDistance: -5
    },
    'F': {
        nameKey: "general.notes.F",
        semiToneDistance: -4
    },
    'F_SHARP': {
        nameKey: "general.notes.F_SHARP",
        semiToneDistance: -3
    },
    'G': {
        nameKey: "general.notes.G",
        semiToneDistance: -2
    },
    'G_SHARP': {
        nameKey: "general.notes.G_SHARP",
        semiToneDistance: -1
    },
    'A': {
        nameKey: "general.notes.A",
        semiToneDistance: 0
    },
    'A_SHARP': {
        nameKey: "general.notes.A_SHARP",
        semiToneDistance: 1
    },
    'B': {
        nameKey: "general.notes.B",
        semiToneDistance: 2
    }
};