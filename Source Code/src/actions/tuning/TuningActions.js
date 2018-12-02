export const SELECT_TUNING = 'select_tuning';

export const selectTuning = (tuning) => {
    return {
        type: SELECT_TUNING,
        payload: tuning
    };
};