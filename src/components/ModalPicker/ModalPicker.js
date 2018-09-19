import React, { Component } from 'react';
import {Modal, Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback, Dimensions} from 'react-native';
import { CommonButtons } from "../common";
import { layouts} from "./constants";

class ModalPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            layouts: this.getLayout()
        };

        Dimensions.addEventListener('change', this.orientationListener);
    }

    orientationListener = () => this.setState({ layout :this.getLayout() });

    getLayout = () => {
        let { height, width } = Dimensions.get('window');
        return (height >= width) ? layouts.horizontal : layouts.vertical
    };

    renderItem = ({ item: { id, title, value } }) => {
        const { selectedValueId, selectedValueColor, onValueSelected } = this.props;

        return (
            <CommonButtons.ScalingButton
                noDefaultStyles={true}
                onPress={() => onValueSelected(value)}
            >
                <Text style={{fontSize: 18,
                    alignSelf: 'flex-start',
                    color: id === selectedValueId ? selectedValueColor : '#343434'
                }}
                >
                    {title}
                </Text>
            </CommonButtons.ScalingButton>
        );
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: this.props.separatorColor,
                    marginVertical: 8
                }}
            />
        );
    };

    render() {
        const {
            visible = false,
            animationType = 'slide',
            transparent = false,
            headerText,
            pickerValues,
            onDismissPicker,
        } = this.props;

        let pickerHeight = (this.state.layout === layouts.vertical) ? '90%' : '45%';

        //2BEB26 - success color

        return (
            <Modal
                visible={visible}
                animationType={animationType}
                transparent={transparent}
                onRequestClose={onDismissPicker}
            >
                <TouchableOpacity
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#00000070',
                    }}
                    onPress={onDismissPicker}
                >
                    <TouchableWithoutFeedback>
                        <View style={
                            {
                                margin: 20,
                                padding: 20,
                                backgroundColor: '#efefef',
                                alignItems: 'flex-start',
                                height: pickerHeight,
                            }}
                        >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                alignSelf: 'center',
                                color: '#cbb20c',
                                paddingBottom: 10
                            }}
                            >
                                {headerText}
                            </Text>
                            <FlatList
                                data={pickerValues}
                                renderItem={this.renderItem}
                                keyExtractor={({title}) => title}
                                ItemSeparatorComponent={this.renderSeparator}
                            >
                            </FlatList>
                            <TouchableOpacity
                                onPress={onDismissPicker}
                                style={{paddingTop: 10, alignSelf: 'center'}}
                            >
                                <Text style={{color: '#cbb20c', fontSize: 18, opacity: 0.8}}>Go back</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>
        );
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.orientationListener);
    }
}

export default ModalPicker;


/*
margin: 20,
padding: 20,
backgroundColor: '#efefef',
alignItems: 'flex-start',
alignSelf: 'center',
borderWidth: 1,
borderRadius: 2,
borderColor: '#ddd',
borderBottomWidth: 0,
shadowColor: '#000',
shadowOffset: {width: 0, height: 2},
shadowOpacity: 0.1,
elevation: 1
*/