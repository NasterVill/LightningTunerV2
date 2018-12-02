import locales from '../i18n/locales/names';
import { SET_LOCALE } from '../actions/locales';

const INITIAL_STATE = locales.en;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOCALE:
            return action.payload;
        default:
            return state;
    }
}