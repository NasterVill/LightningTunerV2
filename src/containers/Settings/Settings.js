import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ModalPicker from '../../components/ModalPicker/index';
import { tuningToString } from '../../musicdata/tunings';
import { selectTuning } from "../../actions/tuningactions/index";
import { bindActionCreators } from 'redux'
import styles from './styles';


class Settings extends Component {
    constructor(props){
        super(props);

        this.state = {
            tuningPickerVisibility: false
        }
    }

    onTuningsPress = () => {
        this.setState({ tuningPickerVisibility: true });
    };

    onDismissTuningSelection = () => {
        this.setState({ tuningPickerVisibility: false });
    };

    onTuningSelected = (tuning) => {
        this.props.selectTuning(tuning);
        //this.onDismissTuningSelection();
    };

    generateTuningPickerValues() {
        return Object.values(this.props.tunings).map((tuning) => {
           return {
               id: tuning.name,
               title: tuningToString(tuning),
               value: tuning
           }
        });
    }

    render() {
        return (
            <View style={[{flex: 1, alignSelf: 'stretch'}, this.props.style]}>
                <ModalPicker
                    visible={this.state.tuningPickerVisibility}
                    transparent={true}
                    animationType={'fade'}
                    headerText={'Select tuning'}
                    pickerValues={this.generateTuningPickerValues()}
                    selectedValueId={this.props.currentTuning.name}
                    selectedValueColor="#dec50c"
                    separatorColor='#cbb20c'
                    onValueSelected={this.onTuningSelected}
                    onDismissPicker={this.onDismissTuningSelection}
                />
                <TouchableOpacity
                    style={styles.tuningsSettingsStyle}
                    onPress={this.onTuningsPress}
                >
                    <Text style={[styles.textStyle, {color: '#414141'}]}>Tuning:</Text>
                    <Text style={[styles.textStyle, {color : '#cbb20c'}]}>{tuningToString(this.props.currentTuning)}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectTuning }, dispatch);
};

const mapStateToProps = ({ currentTuning, tunings }) => {
    return  { currentTuning, tunings };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);