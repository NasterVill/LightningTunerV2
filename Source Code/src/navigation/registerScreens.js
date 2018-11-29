import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { screens } from './screens';
import { wrapComponentWithContext } from '../context';

const registerScreens = (store) => Object.values(screens).
    forEach(screen => Navigation.registerComponentWithRedux(
        screen.id, () => wrapComponentWithContext(screen.component), Provider, store));

export default registerScreens;