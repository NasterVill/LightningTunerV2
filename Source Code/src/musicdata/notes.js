import I18n from '../i18n';
import locales from '../i18n/locales/names';

const BASE_A_FREQ = 440;
const DEFAULT_LOCALE = locales.en;

export function getFrequency(note, baseFrequency = BASE_A_FREQ) {
    return baseFrequency * Math.pow(2,
        ((note.noteData.semiToneDistance + note.octave.coefficient * 12) / 12)
    );
}

export const notesMap = {
    'C':  {
        name : (locale = DEFAULT_LOCALE) => I18n.t("general.notes.C", { locale }),
        semiToneDistance: -9
    },
    'C_SHARP' : {
        name : (locale = DEFAULT_LOCALE) => I18n.t("general.notes.C_SHARP", { locale }),
        semiToneDistance: -8
    },
    'D': {
        name : (locale = DEFAULT_LOCALE) => I18n.t("general.notes.D", { locale }),
        semiToneDistance: -7
    },
    'D_SHARP': {
        name : (locale = DEFAULT_LOCALE) => I18n.t("general.notes.D_SHARP", { locale }),
        semiToneDistance: -6
    },
    'E': {
        name : (locale = DEFAULT_LOCALE) => I18n.t("general.notes.E", { locale }),
        semiToneDistance: -5
    },
    'F': {
        name : (locale = DEFAULT_LOCALE) => I18n.t("general.notes.F", { locale }),
        semiToneDistance: -4
    },
    'F_SHARP': {
        name : (locale = DEFAULT_LOCALE) => I18n.t("general.notes.F_SHARP", { locale }),
        semiToneDistance: -3
    },
    'G': {
        name : (locale = DEFAULT_LOCALE) => I18n.t("general.notes.G", { locale }),
        semiToneDistance: -2
    },
    'G_SHARP': {
        name : (locale = DEFAULT_LOCALE) => I18n.t("general.notes.G_SHARP", { locale }),
        semiToneDistance: -1
    },
    'A': {
        name : (locale = DEFAULT_LOCALE) => I18n.t("general.notes.A", { locale }),
        semiToneDistance: 0
    },
    'A_SHARP': {
        name : (locale = DEFAULT_LOCALE) => I18n.t("general.notes.A_SHARP", { locale }),
        semiToneDistance: 1
    },
    'B': {
        name : (locale = DEFAULT_LOCALE) => I18n.t("general.notes.B", { locale }),
        semiToneDistance: 2
    }
};