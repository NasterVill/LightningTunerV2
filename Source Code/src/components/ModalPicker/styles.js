import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000070',
    },
    separatorStyle: {
        height: 1,
        width: "100%",
        marginVertical: 8
    },
    modalStyle: {
        margin: 20,
        padding: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
    },
    headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#f1d30d',
        paddingBottom: 10
    },
    backButtonStyle: {
        color: '#e3c80c',
        fontSize: 18,
        opacity: 0.8
    },
});