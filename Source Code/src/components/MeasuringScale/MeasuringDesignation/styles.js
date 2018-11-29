import { StyleSheet } from 'react-native';
import { MARGIN_BOTTOM_RATIO } from '../constants';

const generateStyles = (width, height, radius, angle) => {
    angle = angle / 180 * Math.PI;

    const horizontalOffset = width / 2 - height * Math.cos(angle);
    const bottomOffsetSides = radius * Math.sin(angle) + MARGIN_BOTTOM_RATIO * height;
    const bottomOffsetCentral = radius + MARGIN_BOTTOM_RATIO * height;
    const rotationAngle = Math.PI / 2 - angle;

    return StyleSheet.create({
        containerStyle: {
            position: 'absolute',
            width: width,
            height: height,
            top: 0
        },
        leftTextStyle: {
            color: 'black',
            position: 'absolute',
            left: horizontalOffset,
            bottom: bottomOffsetSides,
            transform: [{ rotate: `${-rotationAngle}rad`}],
        },
        centralTextStyle: {
            color: 'black',
            position: 'absolute',
            alignSelf: 'center',
            bottom: bottomOffsetCentral,
            overflow: 'visible'
        },
        rightTextStyle: {
            color: 'black',
            position: 'absolute',
            right: horizontalOffset,
            bottom: bottomOffsetSides,
            transform: [{ rotate: `${rotationAngle}rad`}],
        }
    });
};

export default generateStyles;