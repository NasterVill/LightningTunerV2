import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { screens } from './screens';

const screenGenerator = (Screen, store) => () => (props) => (
    <Provider store={store}>
        <Screen {...props}/>
    </Provider>
);

const registerScreens = (store) => Object.values(screens).
    forEach(screen => Navigation.registerComponent(screen.id, screenGenerator(screen.component, store)));

export default registerScreens;