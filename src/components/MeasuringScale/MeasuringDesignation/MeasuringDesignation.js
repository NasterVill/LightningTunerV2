import React from 'react';
import { View, Text } from 'react-native';
import generateStyles from './styles';

const MeasuringDesignation = ({ width, height, startAngle, rightLabel, centralLabel, leftLabel, style }) => {
    let {
        containerStyle,
        leftTextStyle,
        centralTextStyle,
        rightTextStyle
    } = generateStyles(width, height, startAngle);

    return (
        <View style={[containerStyle, style]}>
            <Text style={leftTextStyle}>{leftLabel}</Text>
            <Text style={centralTextStyle}>{centralLabel}</Text>
            <Text style={rightTextStyle}>{rightLabel}</Text>
        </View>
    );
};

export default MeasuringDesignation;