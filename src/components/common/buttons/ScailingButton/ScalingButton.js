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
                duration: 300,
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
        const buttonScale = scaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.1, 1]
        });

        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <Animated.View style={[
                    this.props.noDefaultStyles ? styles.default_button : styles.button,
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