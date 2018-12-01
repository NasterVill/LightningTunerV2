import React, { PureComponent } from 'react';
import { Svg, Circle } from 'react-native-svg';
import { View } from 'react-native';
import MeasuringArc from './MeasuringArc';
import Needle from './Needle';
import { styles } from './styles';
import MeasuringDesignation from './MeasuringDesignation';

import {
    MARGIN_BOTTOM_RATIO,
    BIG_CIRCLE_RADIUS,
    SMALLER_CIRCLE_RADIUS,
    SVG_HEIGHT_RATIO
} from './constants';


export class MeasuringScale extends PureComponent {
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
	    return this.state.dimensions.height * (1 - MARGIN_BOTTOM_RATIO);
    }

    computeStartAngle() {
        const { width, height } = this.state.dimensions;
        return Math.atan(height / (width / 2)) * 180 / Math.PI;
    }

    computeSvgDrawRadius() {
	    return this.state.dimensions.height * (SVG_HEIGHT_RATIO - MARGIN_BOTTOM_RATIO);
    }

	render() {
	    let { toPos, divisionAmount } = this.props;
	    let { leftLabel, centralLabel, rightLabel, style, componentsColor } = this.props;

		return (
			<View style={[styles.containerStyle, style]}>
				<View style={{flex: 1, alignSelf: 'stretch'}} onLayout={this.onLayout}>
                    {
                        this.state.dimensions ?
                        <View style={{ flex: 1, width: '100%' }}>
                            <MeasuringDesignation
                                height={this.state.dimensions.height}
                                width={this.state.dimensions.width}
                                startAngle={this.computeStartAngle()}
                                radius={this.computeSvgDrawRadius()}
                                leftLabel={leftLabel}
                                centralLabel={centralLabel}
                                rightLabel={rightLabel}
                                color={componentsColor}
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
                                    color={componentsColor}
                                />
                                <Circle
                                    cx={this.computeCx()}
                                    cy={this.computeCy()}
                                    r={BIG_CIRCLE_RADIUS}
                                    stroke={componentsColor}
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <Circle
                                    cx={this.computeCx()}
                                    cy={this.computeCy()}
                                    r={SMALLER_CIRCLE_RADIUS}
                                    stroke={componentsColor}
                                    fill={componentsColor}
                                />
                            </Svg>
                            <Needle
                                height={this.computeSvgDrawRadius()}
                                width={this.state.dimensions.width}
                                startAngle={this.computeStartAngle()}
                                style={{ position: 'absolute', top: (1 - SVG_HEIGHT_RATIO) * this.state.dimensions.height }}
                                toPos={toPos}
                            />
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
    };
}