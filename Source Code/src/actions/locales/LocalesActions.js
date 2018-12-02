export const SET_LOCALE = 'SET_LOCALE';

export const setLocale = (locale) => {
    return {
        type: SET_LOCALE,
        payload: locale
    };
};