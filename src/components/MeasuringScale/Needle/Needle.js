import React, { Component } from 'react';
import { Animated } from 'react-native';
import LightningSvg from '../../LightningSvg';

const MAX_STEPS = 100;
const ANIMATION_DURATION = 400;
const DEFAULT_POS = 50;

export default class Needle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currPos: new Animated.Value(DEFAULT_POS),
        };

        this.state.currPos.addListener((toPos) => {
            const { height, startAngle } = this.props;

            const step = ((180 - 2 * startAngle) / MAX_STEPS);
            const angle = step * (toPos.value - 50);

            this._animatedView.setNativeProps({
                style: {
                    transform: [
                        { translateY: height/2 },
                        { rotate: `${angle}deg` },
                        { translateY: -height/2 },
                    ]
                }
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.toPos !== nextProps.toPos) {
            this.state.currPos.stopAnimation();
            this.animate(nextProps.toPos);
        }
    }

    animate(toPos) {
        Animated.timing(
            this.state.currPos,
            {
                toValue: toPos,
                duration: ANIMATION_DURATION
            }
        ).start();
    }

    render() {
        const { style, width, height } = this.props;

        return (
            <Animated.View
                ref={ref => this._animatedView = ref}
                style={style}
            >
                <LightningSvg
                    width={width}
                    height={height}
                />
            </Animated.View>
        );
    }
};