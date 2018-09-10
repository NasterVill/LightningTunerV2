import { getDefaultTunings } from "../musicdata";

const INITIAL_STATE = getDefaultTunings().STANDARD;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}