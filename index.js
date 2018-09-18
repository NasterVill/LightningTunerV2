import App from './App';
import {createStore} from 'redux';
import registerScreens from "./src/navigation/registerScreens";
import rootReducer from './src/reducers'
import {Navigation} from "react-native-navigation";

const reduxStore = createStore(rootReducer);
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
            backButton: {
                color: 'white'
            },
            drawBehind: false,
            visible: true,
        }
    });
});

const app = new App();