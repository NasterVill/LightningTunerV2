import { TuningScreen, SettingsScreen } from "../../src/screens";

export const screensNames = {
    TuningScreen: 'TuningScreen',
    SettingsScreen: 'SettingsScreen',
}

export const screens = {
    [screensNames.TuningScreen]: {
        id: 'navigation.playground.TuningScreen',
        component: TuningScreen,
        title: 'LightningTuner',
    },
    [screensNames.SettingsScreen]: {
        id: 'navigation.playground.SettingsScreen',
        component: SettingsScreen,
        title: 'Settings',
    },
};