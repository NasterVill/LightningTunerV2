import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

const ModalPicker = (props) => {
    const {
        visible,
        animationType,
        transparent,
        headerText,
        pickerValues,
        onValueSelected,
        onDismissPicker
    } = props;

    return (
        <Modal
            visible={visible}
            animationType={animationType}
            transparent={transparent}
            onRequestClose={onDismissPicker}
        >
            <View style={
                {
                    margin: 20, padding: 20,
                    backgroundColor: '#efefef',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}
            >
                <Text>{headerText}</Text>
                {
                    pickerValues.map((value, index) => {
                        return (
                            <TouchableHighlight
                                key={index}
                                onPress={() => onValueSelected(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                                <Text>{ value.title }</Text>
                            </TouchableHighlight>
                        );
                    })
                }
                <TouchableHighlight
                    onPress={() => onDismissPicker()}
                    style={{ paddingTop: 4, paddingBottom: 4 }}
                >
                    <Text style={{ color: '#999' }}>Cancel</Text>
                </TouchableHighlight>
            </View>
        </Modal>
    );
};

export default ModalPicker;