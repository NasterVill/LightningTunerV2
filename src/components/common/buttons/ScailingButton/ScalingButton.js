import React, { Component } from 'react';
import {
    Text,
    Animated,
    Easing,
    TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';

class ScalingButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scaleValue: new Animated.Value(0)
        }
    }

    onPressIn = () => {
        this.state.scaleValue.setValue(0);
        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 0.5,
                duration: 250,
                easing: Easing.in(Easing.ease)
            }
        ).start();
    };

    onPressOut = () => {
        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 1,
                duration: 250,
                easing: Easing.out(Easing.ease)
            }
        ).start(this.props.onPress);
    };

    getContent() {
        if(this.props.children){
            return this.props.children;
        }
        return <Text style={this.props.styles.label}>{ this.props.label }</Text>;
    }

    render() {
        const buttonScale = this.state.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0.9, 1]
        });

        return (
            <TouchableWithoutFeedback onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
                <Animated.View style={[
                    this.props.noDefaultStyles ? styles.defaultButton : styles.presetButton,
                    this.props.styles ? this.props.styles.button : '',
                    {
                        transform: [
                            {scale: buttonScale}
                        ]
                    }
                ]}
                >
                    {this.getContent()}
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

export default ScalingButton;