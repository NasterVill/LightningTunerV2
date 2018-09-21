import React from 'react'
import Svg, { Path } from 'react-native-svg'

const LightningSvg = ({ svgRef, ...props }) => (
    <Svg
        width={60}
        height={330}
        version={1}
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 600 3300"
        ref={svgRef}
        {...props}
    >
        <Path
            fill="#DEC50C"
            stroke="#DEC50C"
            strokeWidth={2.1}
            strokeMiterlimit={2.613}
            d="M.9 2009.7L300.9.1v1630l300-339.3-300 2009.6V1737.6z"
        />
    </Svg>
);

export default LightningSvg;
