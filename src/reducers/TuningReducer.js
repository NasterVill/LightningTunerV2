import { getDefaultTunings } from "../musicdata";

const INITIAL_STATE = getDefaultTunings();

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}