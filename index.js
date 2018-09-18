import App from './App';
import { createStore } from 'redux';
import registerScreens from "./src/navigation/registerScreens";
import rootReducer from './src/reducers'

const reduxStore = createStore(rootReducer);
registerScreens(reduxStore);

const app = new App();