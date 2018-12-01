import React, { PureComponent } from 'react';
import { Line, G } from 'react-native-svg';

const SMALL_TICK_WIDTH = 2;
const BIG_TICK_WIDTH = 5;
const BIG_TICK_LENGTH_RATIO = 0.08;
const SMALL_TICK_LENGTH_RATIO = BIG_TICK_LENGTH_RATIO * 0.6;

export default class MeasuringArc extends PureComponent {
	constructor(props) {
		super(props);
	}

	drawTicks() {
	    let Arc = [];
        const { radius, startAngle, divisionAmount } = this.props;

        const smallTickLength = radius * SMALL_TICK_LENGTH_RATIO;
        const bigTickLength = radius * BIG_TICK_LENGTH_RATIO;

        const endAngle = 180 - startAngle;
        const midAngle = 90;
        const step = (endAngle - startAngle) / divisionAmount;
        
        let currentAngle = startAngle;

        Arc.push(this.drawTick(currentAngle * Math.PI / 180, bigTickLength, radius, BIG_TICK_WIDTH));
        currentAngle += step;

        while (currentAngle < midAngle) {
            Arc.push(this.drawTick(currentAngle * Math.PI / 180, smallTickLength, radius, SMALL_TICK_WIDTH));
            currentAngle += step;
        }

        currentAngle = midAngle;
        Arc.push(this.drawTick(currentAngle * Math.PI / 180, bigTickLength, radius, BIG_TICK_WIDTH));
        currentAngle += step;

        while (currentAngle < endAngle) {
            Arc.push(this.drawTick(currentAngle * Math.PI / 180, smallTickLength, radius, SMALL_TICK_WIDTH));
            currentAngle += step;
        }

        currentAngle = endAngle;
        Arc.push(this.drawTick(currentAngle * Math.PI / 180, bigTickLength, radius, BIG_TICK_WIDTH));

	    return Arc;
    }

    drawTick(angle, tickLength, radius, strokeWidth) {
        const { cx, cy, color } = this.props;

        const x1 = cx - radius * Math.cos(angle);
        const y1 = cy - radius * Math.sin(angle);
        const x2 = x1 + tickLength * Math.cos(angle);
        const y2 = y1 + tickLength * Math.sin(angle);

	    return (
	        <Line
                key={angle + strokeWidth}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={color}
                strokeWidth={strokeWidth}
            />
        );
    }
	
	render() {
		return (
		    <G>
                {this.drawTicks()}
            </G>
        );
	}
}