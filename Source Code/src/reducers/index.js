import { combineReducers } from 'redux';
import CurrentTuningReducer from './CurrentTuningReducer'
import TuningsReducer from './TuningsReducer';
import ThemeReducer from './ThemeReducer';
import LocaleReducer from './LocalesReducer';

export default combineReducers({
    tunings: TuningsReducer,
    currentTuning: CurrentTuningReducer,
    theme: ThemeReducer,
    locale: LocaleReducer,
});
