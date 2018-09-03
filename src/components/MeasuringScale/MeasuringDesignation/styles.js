import { StyleSheet } from 'react-native';
import { MARGIN_BOTTOM } from "../constants";

const generateStyles = (width, height, radius, angle) => {
    angle = angle / 180 * Math.PI;

    let horizontalOffset = width / 2 - height * Math.cos(angle);
    let topOffsetSides = height - radius * Math.sin(angle) - MARGIN_BOTTOM;
    let topOffsetCentral = height - radius - MARGIN_BOTTOM;
    let rotationAngle = Math.PI / 2 - angle;

    return StyleSheet.create({
        containerStyle: {

        },
        leftTextStyle: {
            color: 'black',
            position: 'absolute',
            left: horizontalOffset,
            top: topOffsetSides,
            transform: [{ rotate: `${-rotationAngle}rad`}]
        },
        centralTextStyle: {
            color: 'black',
            alignSelf: 'center',
            top: topOffsetCentral
        },
        rightTextStyle: {
            color: 'black',
            position: 'absolute',
            right: horizontalOffset,
            top: topOffsetSides,
            transform: [{ rotate: `${rotationAngle}rad`}]
        }
    });
};

export default generateStyles;