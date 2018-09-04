import { Navigation } from "react-native-navigation";
import TuningScreen from "./src/screens/TuningScreen";

Navigation.registerComponent(`navigation.playground.TuningScreen`, () => TuningScreen);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: "navigation.playground.TuningScreen",
                        }
                    }
                ],
            }
        }
    });
});