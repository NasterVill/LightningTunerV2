import locales from '../i18n/locales/index';
import { SET_LOCALE } from '../actions/locales';

const INITIAL_STATE = locales.en;

export default (state = INITIAL_STATE, action) => {
    console.log(state);
    switch (action.type) {
        case SET_LOCALE:
            return action.payload;
        default:
            return state;
    }
}