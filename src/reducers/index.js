import { combineReducers } from 'redux';
import TuningReducer from './TuningReducer'

const rootReducer = combineReducers({
    tunings: TuningReducer,
});

export default rootReducer;
