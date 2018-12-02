import { StyleSheet } from 'react-native';

const generateStyles = (theme) => {
    return StyleSheet.create({
        containerStyle: {
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: theme.primary,
        },
        settingsElementStyle: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 18,
            borderColor: theme.secondary,
            borderBottomWidth: 1,
        },
        textStyle: {
            fontSize: 18,
            fontWeight: '500',
            color: theme.primaryText,
        }
    });
};

export default generateStyles;