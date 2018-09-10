import { combineReducers } from 'redux';
import CurrentTuningReducer from './CurrentTuningReducer'
import TuningsReducer from './TuningsReducer';

export default combineReducers({
    tunings: TuningsReducer,
    currentTuning: CurrentTuningReducer,
});
