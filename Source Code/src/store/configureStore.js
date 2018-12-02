import { persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import rootReducer from '../reducers/index'

export const config = {
    key: 'root',
    storage: AsyncStorage,
};

export const configureStore = () => {
    return createStore(persistCombineReducers(config, rootReducer));
};