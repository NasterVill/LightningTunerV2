import { combineReducers } from 'redux';
import TuningReducer from './TuningReducer'

export default combineReducers({
    tunings: TuningReducer,
});
