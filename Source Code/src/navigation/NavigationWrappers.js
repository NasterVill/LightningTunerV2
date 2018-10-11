import { Navigation } from 'react-native-navigation';
import { STACK_ID } from './constants';

export const pushScreen = (screen, options) => {
    Navigation.push(STACK_ID, {
        component: {
            name: screen.id,
            options
        }
    });
};