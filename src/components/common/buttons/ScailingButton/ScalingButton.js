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

    scale = () => {
        this.state.scaleValue.setValue(0);
        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.easeOutBack
            }
        ).start();
    };

    onPress = () => {
        this.scale();
        this.props.onPress();
    };

    getContent() {
        if(this.props.children){
            return this.props.children;
        }
        return <Text style={this.props.styles.label}>{ this.props.label }</Text>;
    }

    render() {
        // 1.1 was changed to 0.9
        const buttonScale = this.state.scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0.8, 1]
        });

        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
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