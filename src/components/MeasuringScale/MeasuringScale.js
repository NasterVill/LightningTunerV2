import React, { Component } from 'react';
import { Svg, Circle } from 'react-native-svg';
import { View } from 'react-native';
import MeasuringArc from './MeasuringArc';
import Needle from './Needle';
import { styles } from './styles';
import MeasuringDesignation from "./MeasuringDesignation";
import {
    MARGIN_BOTTOM,
    BIG_CIRCLE_RADIUS,
    SMALLER_CIRCLE_RADIUS,
    SVG_HEIGHT_RATIO
} from './constants';

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
        return Math.atan(height * SVG_HEIGHT_RATIO / (width / 2)) * 180 / Math.PI;
    }

    computeSvgDrawRadius() {
	    return this.state.dimensions.height * SVG_HEIGHT_RATIO - MARGIN_BOTTOM;
    }
	
	render() {
	    let { toPos, divisionAmount } = this.props;
	    let { leftLabel, centralLabel, rightLabel } = this.props;

		return (
			<View style={[styles.containerStyle, this.props.style]}>
				<View style={{flex: 1, alignSelf: 'stretch'}} onLayout={this.onLayout}>
                    {
                        this.state.dimensions ?
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                            <MeasuringDesignation
                                height={this.state.dimensions.height}
                                width={this.state.dimensions.width}
                                startAngle={this.computeStartAngle()}
                                radius={this.computeSvgDrawRadius()}
                                leftLabel={leftLabel}
                                centralLabel={centralLabel}
                                rightLabel={rightLabel}
                            />
                            <Svg
                                height={this.state.dimensions.height}
                                width={this.state.dimensions.width}
                            >
                                <MeasuringArc
                                    cx={this.computeCx()}
                                    cy={this.computeCy()}
                                    radius={this.computeSvgDrawRadius()}
                                    startAngle={this.computeStartAngle()}
                                    divisionAmount={divisionAmount}
                                />
                                <Needle
                                    cx={this.computeCx()}
                                    cy={this.computeCy()}
                                    length={this.computeSvgDrawRadius()}
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
                        </View>
                        : undefined
                    }
				</View>
			</View>
		);
	}

    onLayout = event => {
        let {width, height} = event.nativeEvent.layout;
        this.setState({ dimensions: { width, height } });
    }
}