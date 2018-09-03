import { StyleSheet } from 'react-native';

const generateStyles = (width, height, angle) => {
    let leftOffset = 10;
    let rightOffset = 10;
    let topOffsetSides = 65;
    let topOffsetCentral = 35;
    let rotationAngle = 90 - angle;

    if (width > height) {
        leftOffset = width / 4.5;
        rightOffset = width / 4.5;
        topOffsetCentral = 20;
        topOffsetSides = 105;
    }

    return StyleSheet.create({
        containerStyle: {
            //backgroundColor: 'yellow'
        },
        leftTextStyle: {
            color: 'black',
            position: 'absolute',
            left: leftOffset,
            top: topOffsetSides,
            transform: [{ rotate: `${-rotationAngle}deg`}]
        },
        centralTextStyle: {
            color: 'black',
            alignSelf: 'center',
            top: topOffsetCentral
        },
        rightTextStyle: {
            color: 'black',
            position: 'absolute',
            right: rightOffset,
            top: topOffsetSides,
            transform: [{ rotate: `${rotationAngle}deg`}]
        }
    });
};

export default generateStyles;