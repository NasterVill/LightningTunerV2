import React from 'react';
import { imagesData, imagesStore } from "../imagestore";

export const buttonsNames = {
    SettingsButton: 'SettingsButton'
};

export const getTopBarButtons = () => {
    console.log(imagesStore);

    return {
        [buttonsNames.SettingsButton]: {
            id: buttonsNames.SettingsButton,
            icon: imagesStore[imagesData.COGS_TOP_BAR_WHITE]
        }
    }
};