import { StyleSheet } from 'react-native';

const generateStyles = (theme) => {
    return StyleSheet.create({
        containerStyle: {
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: theme.primary,
        },
        textStyle: {
            fontSize: 26,
            textAlign: 'center',
            textAlignVertical: 'center',
            paddingBottom: 15,
            color: theme.primaryText,
            flex: 2,
        },
        tuningStyle: {
            flex: 1,
        },
        tunerViewStyle: {
            flex: 9,
        }
    });
};

export default generateStyles;