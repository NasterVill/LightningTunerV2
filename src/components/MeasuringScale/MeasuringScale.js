import React, { Component } from 'react';
import { Svg, Circle } from 'react-native-svg';
import { View } from 'react-native';
import MeasuringArc from './MeasuringArc';
import Needle from './Needle';
import { styles } from './styles';

const MARGIN_BOTTOM = 16;
const BIG_CIRCLE_RADIUS = MARGIN_BOTTOM / 2;
const SMALLER_CIRCLE_RADIUS = BIG_CIRCLE_RADIUS * 0.6;

export default class MeasuringScale extends Component {
	constructor(props) {
        super(props);

        this.state = {
            dimensions: undefined
        };
    }

    computeCx() {
	    return this.state.dimensions.width / 2;
    }

    computeCy() {
	    return this.state.dimensions.height - MARGIN_BOTTOM;
    }

    computeStartAngle() {
        let { width, height } = this.state.dimensions;
        return Math.atan(height / (width / 2)) * 180 / Math.PI;
    }
	
	render() {
	    let { toPos, divisionAmount } = this.props;

		return (
			<View style={[styles.containerStyle, this.props.style]}>
				<View style={{flex: 1, alignSelf: 'stretch'}} onLayout={this.onLayout}>
                    {
                        this.state.dimensions ?
                        <Svg
                            height={this.state.dimensions.height}
                            width={this.state.dimensions.width}
                        >
                            <MeasuringArc
                                cx={this.computeCx()}
                                cy={this.computeCy()}
                                radius={this.state.dimensions.height - MARGIN_BOTTOM}
                                startAngle={this.computeStartAngle()}
                                divisionAmount={divisionAmount}
                            />
                            <Needle
                                cx={this.computeCx()}
                                cy={this.computeCy()}
                                length={this.state.dimensions.height - MARGIN_BOTTOM}
                                startAngle={this.computeStartAngle()}
                                toPos={toPos}
                            />
                            <Circle
                                cx={this.computeCx()}
                                cy={this.computeCy()}
                                r={BIG_CIRCLE_RADIUS}
                                stroke="black"
                                strokeWidth="2"
                                fill="none"
                            />
                            <Circle
                                cx={this.computeCx()}
                                cy={this.computeCy()}
                                r={SMALLER_CIRCLE_RADIUS}
                                stroke="black"
                            />
                        </Svg>
                        : undefined
                    }
				</View>
			</View>
		);
	}

    onLayout = event => {
        if (this.state.dimensions) return ;
        let {width, height} = event.nativeEvent.layout;
        this.setState({ dimensions: { width, height } });
    }
}