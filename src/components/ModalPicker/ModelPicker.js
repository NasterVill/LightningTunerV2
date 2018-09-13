import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const ModalPicker = (props) => {
    const {
        visible=false,
        animationType = 'slide',
        transparent=false,
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
            <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={onDismissPicker}>
                <TouchableWithoutFeedback>
                    <View style={
                        {
                            margin: 20, padding: 20,
                            backgroundColor: '#efefef',
                            alignItems: 'flex-start',
                            borderWidth: 1,
                            borderRadius: 2,
                            borderColor: '#ddd',
                            borderBottomWidth: 0,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            elevation: 1,
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>{headerText}</Text>
                        {
                            pickerValues.map((value, index) => {
                                return (
                                    <TouchableHighlight
                                        key={index}
                                        onPress={() => onValueSelected(value.value)}
                                        underlayColor="#dec50c"
                                        style={{ paddingTop: 4, paddingBottom: 4 }}
                                    >
                                        <Text style={{fontSize: 18}}>{ value.title }</Text>
                                    </TouchableHighlight>
                                );
                            })
                        }
                        <TouchableHighlight
                            onPress={onDismissPicker}
                            style={{ paddingTop: 4, alignSelf: 'center' }}
                        >
                            <Text style={{ color: '#999', fontSize: 18 }}>Cancel</Text>
                        </TouchableHighlight>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalPicker;