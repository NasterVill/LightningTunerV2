import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';
import ModalPicker from '../../components/ModalPicker/index';
import { tuningToString } from '../../musicdata/tunings';
import { selectTuning } from '../../actions/tuningactions/index';
import { changeTheme } from '../../actions/theme';
import { bindActionCreators } from 'redux'
import generateStyles from './styles';
import { themes } from '../../context/themeContext';

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
        const styles = generateStyles(this.props.theme);

        return (
            <View style={[styles.containerStyle, this.props.style]}>
                <ModalPicker
                    visible={this.state.tuningPickerVisibility}
                    transparent={true}
                    animationType={'fade'}
                    headerText={'Select tuning'}
                    pickerValues={this.generateTuningPickerValues()}
                    selectedValueId={this.props.currentTuning.name}
                    selectedValueColor="#dec50c"
                    backgroundColor={this.props.theme.primary}
                    textColor={this.props.theme.secondaryText}
                    separatorColor='#cbb20c'
                    onValueSelected={this.onTuningSelected}
                    onDismissPicker={this.onDismissTuningSelection}
                />
                <TouchableOpacity
                    style={styles.tuningsSettingsElementStyle}
                    onPress={this.onTuningsPress}
                >
                    <Text style={[styles.textStyle]}>Tuning:</Text>
                    <Text style={[styles.textStyle, {color : '#e8cd20'}]}>{tuningToString(this.props.currentTuning)}</Text>
                </TouchableOpacity>
                <View style={styles.tuningsSettingsElementStyle}>
                    <Text style={styles.textStyle}>Dark theme</Text>
                    <Switch
                        value={this.props.theme.id === themes.dark.id}
                        onValueChange={this.props.changeTheme}
                    />
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectTuning, changeTheme }, dispatch);
};

const mapStateToProps = ({ currentTuning, tunings, theme }) => {
    return  { currentTuning, tunings, theme };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);