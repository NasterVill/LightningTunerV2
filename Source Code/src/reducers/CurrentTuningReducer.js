import { getDefaultTunings } from '../musicdata';
import { SELECT_TUNING } from '../actions/tuning';

const INITIAL_STATE = getDefaultTunings().STANDARD;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_TUNING:
            return action.payload;
        default:
            return state;
    }
}