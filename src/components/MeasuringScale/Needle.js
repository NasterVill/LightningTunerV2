import React, {Component} from 'react';
import { Animated } from 'react-native';
import {Line} from 'react-native-svg';

const MAX_STEPS = 100;
const ANIMATION_DURATION = 700;
const DEFAULT_POS = 50;

let AnimatedLine = Animated.createAnimatedComponent(Line);

export default class Needle extends Component {
    constructor(props) {
        super(props);

        let { cx, cy, length, startAngle } = this.props;
        let step = ((180 - 2 * startAngle) / MAX_STEPS);

        this.state = {
            currPos: new Animated.Value(DEFAULT_POS),
        };

        this.state.currPos.addListener((toPos) => {
            let angle = step * toPos.value + startAngle;
            let x1 = cx - length * Math.cos(angle * Math.PI / 180);
            let y1 = cy - length * Math.sin(angle * Math.PI / 180);

            console.log(angle, toPos.value);

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
        let { cx, cy, length, startAngle } = this.props;

        let step = ((180 - 2 * startAngle) / MAX_STEPS);
        let angle = step * DEFAULT_POS + startAngle;

        let startX = cx - length * Math.cos(angle * Math.PI / 180);
        let startY = cy - length * Math.sin(angle * Math.PI / 180);

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





















































/*
import React, {Component} from 'react';
import {Line} from 'react-native-svg';

const MAX_STEPS = 100;

export default class Needle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { cx, cy, length, startAngle, toPos } = this.props

        let step = ((180 - 2 * startAngle) / MAX_STEPS);
        let angle = step * toPos + startAngle;

        let x1 = cx - length * Math.cos(angle * Math.PI / 180);
        let y1 = cy - length * Math.sin(angle * Math.PI / 180);

        return (
            <Line
                x1={x1}
                y1={y1}
                x2={cx}
                y2={cy}
                stroke="#dec50c"
                strokeWidth="5"
            />
        );
    }
};
*/