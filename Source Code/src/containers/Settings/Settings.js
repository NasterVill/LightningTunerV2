import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { connect } from 'react-redux';
import ModalPicker from '../../components/ModalPicker/index';
import { tuningToString } from '../../musicdata/tunings';
import { selectTuning } from '../../actions/tuning';
import { setLocale } from '../../actions/locales';
import { changeTheme } from '../../actions/theme';
import { bindActionCreators } from 'redux'
import generateStyles from './styles';
import locales from '../../i18n/locales/names';
import I18n from '../../i18n';
import { themes } from '../../context/themeContext';

class Settings extends Component {
    constructor(props){
        super(props);

        this.state = {
            pickerVisibility: false,
            isTuningsSetting: false,
            isLocalesSetting: false,
        }
    }

    onTuningsPress = () => {
        this.setState({ pickerVisibility: true, isTuningsSetting: true });
    };

    onLocalePress = () => {
        this.setState({ pickerVisibility: true, isLocalesSetting: true });
    };

    onDismissSelection = () => {
        this.setState({ pickerVisibility: false,isTuningsSetting: false, isLocalesSetting: false });
    };

    onSelected = (value) => {
        if (this.state.isTuningsSetting) {
            return this.props.selectTuning(value);
        } else if (this.state.isLocalesSetting) {
            return this.props.setLocale(value);
        }
    };

    generatePickerValues() {
       if (this.state.isTuningsSetting) {
           return this.generateTuningPickerValues();
       } else if (this.state.isLocalesSetting) {
           return this.generateLocalePickerValues();
       }
    }

    generateTuningPickerValues() {
        return Object.values(this.props.tunings).map((tuning) => {
            return {
                id: tuning.name,
                title: tuningToString(tuning, this.props.locale),
                value: tuning
            }
        });
    }

    generateLocalePickerValues() {
        return Object.values(locales).map((locale) => {
            return {
                id: locale,
                title: I18n.t("general.localeName", { locale }),
                value: locale
            }
        });
    }

    getSelectedValue = () => {
        if (this.state.isTuningsSetting) {
            return this.props.currentTuning.name
        } else if (this.state.isLocalesSetting) {
            return this.props.locale;
        }
    };

    getHeaderText = () => {
        if (this.state.isTuningsSetting) {
            return 'Select tuning';
        } else if (this.state.isLocalesSetting) {
            return 'Set convention';
        }
    };

    render() {
        const styles = generateStyles(this.props.theme);

        return (
            <View style={[styles.containerStyle, this.props.style]}>
                <ModalPicker
                    visible={this.state.pickerVisibility}
                    transparent={true}
                    animationType={'fade'}
                    headerText={this.getHeaderText()}
                    pickerValues={this.generatePickerValues()}
                    selectedValueId={this.getSelectedValue()}
                    selectedValueColor="#dec50c"
                    backgroundColor={this.props.theme.primary}
                    textColor={this.props.theme.secondaryText}
                    separatorColor='#cbb20c'
                    onValueSelected={this.onSelected}
                    onDismissPicker={this.onDismissSelection}
                />
                <TouchableOpacity
                    style={styles.settingsElementStyle}
                    onPress={this.onTuningsPress}
                >
                    <Text style={[styles.textStyle]}>Tuning:</Text>
                    <Text style={[styles.textStyle, {color : '#e8cd20'}]}>{this.props.currentTuning.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.settingsElementStyle}
                    onPress={this.onLocalePress}
                >
                    <Text style={[styles.textStyle]}>Note name convention:</Text>
                    <Text style={[styles.textStyle, {color : '#e8cd20'}]}>{I18n.t("general.localeName", { locale: this.props.locale })}</Text>
                </TouchableOpacity>
                <View style={styles.settingsElementStyle}>
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
    return bindActionCreators({ selectTuning, changeTheme, setLocale }, dispatch);
};

const mapStateToProps = ({ currentTuning, tunings, theme, locale }) => {
    return  { currentTuning, tunings, theme, locale };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);