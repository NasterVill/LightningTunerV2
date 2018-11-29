import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tuningsSettingsStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 18,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 1,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '500'
    }
});

export default styles;