import { StyleSheet } from 'react-native';

const OFFSET = 20;

const generateStyles = (width, height, radius, angle) => {
    angle = angle / 180 * Math.PI;

    let horizontalOffset = width / 2 - radius * Math.cos(angle) - OFFSET;
    let topOffsetSides = height - radius * Math.sin(angle) - OFFSET;
    let topOffsetCentral = height - radius - OFFSET;
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