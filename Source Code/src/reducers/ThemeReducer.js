import { themes } from '../context/themeContext';
import { CHANGE_THEME } from '../actions/theme';

const INITIAL_STATE = themes.light;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            console.log(state.theme);

            return {
                ...(
                    state.id === themes.dark.id
                        ? themes.light
                        : themes.dark
                )
            };
        default:
            return state;
    }
}