import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class Fade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
            _visibility: new Animated.Value(this.props.visible ? 1 : 0)
        };
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({ visible: true });
        }
        Animated.timing(this.state._visibility, {
            toValue: nextProps.visible ? 1 : 0,
            duration: 300,
        }).start(() => {
            this.setState({ visible: nextProps.visible });
        });
    }

    render() {
        const { visible, style, children, ...rest } = this.props;

        const containerStyle = {
            opacity: this.state._visibility.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
            }),
            transform: [
                {
                    scale: this.state._visibility.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.6, 1],
                    }),
                },
            ],
        };

        const combinedStyle = [containerStyle, style];
        return (
            <Animated.View style={this.state.visible ? combinedStyle : containerStyle} {...rest}>
                {this.state.visible ? children : undefined}
            </Animated.View>
        );
    }
}