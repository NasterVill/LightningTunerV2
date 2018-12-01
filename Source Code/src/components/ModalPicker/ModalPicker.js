import React, { Component } from 'react';
import { Modal, Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { CommonButtons } from '../common';
import { layouts, CHANGE_EVENT } from './constants';
import { styles } from './styles';

class ModalPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            layouts: this.getLayout()
        };

        Dimensions.addEventListener(CHANGE_EVENT, this.orientationListener);
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
                    color: id === selectedValueId ? selectedValueColor : this.props.textColor
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
                style={[
                    styles.separatorStyle,
                    { backgroundColor: this.props.separatorColor }
                ]}
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
            backgroundColor,
        } = this.props;

        const pickerHeight = (this.state.layout === layouts.vertical) ? '90%' : '50%';

        return (
            <Modal
                visible={visible}
                animationType={animationType}
                transparent={transparent}
                onRequestClose={onDismissPicker}
            >
                <TouchableOpacity
                    style={styles.containerStyle}
                    onPress={onDismissPicker}
                >
                    <TouchableWithoutFeedback>
                        <View style={[styles.modalStyle, { backgroundColor ,height: pickerHeight }]}>
                            <Text style={styles.headerStyle}
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
                                <Text style={styles.backButtonStyle}>Go back</Text>
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