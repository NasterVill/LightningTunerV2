import { Navigation } from "react-native-navigation";
import { createStore, applyMiddleware } from 'redux';
import { screens, screensNames } from "./src/navigation/screens";
import registerScreens from "./src/navigation/registerScreens";
import rootReducer from './src/reducers'

const reduxStore = applyMiddleware(rootReducer)(createStore);

registerScreens(reduxStore);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
        topBar: {
            title: {
                fontSize: 20,
                color: '#FFFFFF',
            },
            background: {
                color: '#3F51B5'
            },
            drawBehind: false,
            visible: true
        }
    });

    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: screens[screensNames.TuningScreen].id,
                        }
                    }
                ],
            }
        }
    });
});