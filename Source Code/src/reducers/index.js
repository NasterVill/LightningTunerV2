import CurrentTuningReducer from './CurrentTuningReducer'
import TuningsReducer from './TuningsReducer';
import ThemeReducer from './ThemeReducer';
import LocaleReducer from './LocalesReducer';

export default {
    tunings: TuningsReducer,
    currentTuning: CurrentTuningReducer,
    theme: ThemeReducer,
    locale: LocaleReducer,
};
