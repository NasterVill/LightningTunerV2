import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import LightningSvg from '../../LightningSvg';

const MAX_STEPS = 100;
const ANIMATION_DURATION = 400;
const DEFAULT_POS = 50;

export default class Needle extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currPos: new Animated.Value(DEFAULT_POS),
        };

        this.state.currPos.addListener((toPos) => {
            const { height, startAngle } = this.props;

            const step = ((180 - 2 * startAngle) / MAX_STEPS);
            const angle = step * (toPos.value - MAX_STEPS / 2);

            if(this._animatedView != null) {
                this._animatedView.setNativeProps({
                    style: {
                        transform: [
                            {translateY: height / 2},
                            {rotate: `${angle}deg`},
                            {translateY: -height / 2},
                        ]
                    }
                });
            }
        });
    }

    componentWillReceiveProps({ toPos, width, height, startAngle }) {
        if (this.props.toPos !== toPos ||
            this.props.width !== width ||
            this.props.height !== height ||
            this.props.startAngle !== startAngle) {
            this.state.currPos.stopAnimation();
            this.animate(toPos);
        }
    }

    animate(toPos) {
        Animated.timing(
            this.state.currPos,
            {
                toValue: toPos,
                duration: ANIMATION_DURATION,
                useNativeDriver: true
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