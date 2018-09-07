import React, { Component } from 'react';
import { Animated } from 'react-native';
import {Line} from 'react-native-svg';

const MAX_STEPS = 100;
const ANIMATION_DURATION = 600;
const DEFAULT_POS = 50;

let AnimatedLine = Animated.createAnimatedComponent(Line);

export default class Needle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currPos: new Animated.Value(DEFAULT_POS),
        };

        this.state.currPos.addListener((toPos) => {
            const { cx, cy, length, startAngle } = this.props;

            const step = ((180 - 2 * startAngle) / MAX_STEPS);
            const angle = step * toPos.value + startAngle;

            const x1 = cx - length * Math.cos(angle * Math.PI / 180);
            const y1 = cy - length * Math.sin(angle * Math.PI / 180);

            this._line.setNativeProps({
                x1: x1.toString(),
                y1: y1.toString(),
                x2: cx.toString(),
                y2: cy.toString()
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
        const { cx, cy, length, startAngle } = this.props;

        const step = ((180 - 2 * startAngle) / MAX_STEPS);
        const angle = step * DEFAULT_POS + startAngle;

        const startX = cx - length * Math.cos(angle * Math.PI / 180);
        const startY = cy - length * Math.sin(angle * Math.PI / 180);

        return (
            <AnimatedLine
                ref={ref => this._line = ref}
                x1={startX}
                y1={startY}
                x2={cx}
                y2={cy}
                stroke="#dec50c"
                strokeWidth="5"
            />
        );
    }
};