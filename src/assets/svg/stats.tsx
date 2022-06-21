import * as React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

function SvgComponent({
  width = 20,
  height = 20,
  fillColor = '#fff',
}: {
  width: number;
  height: number;
  fillColor: string;
}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256">
      <G
        transform="matrix(.72 0 0 .72 128 128) matrix(3.89 0 0 3.89 -175.05 -175.05)"
        stroke="none"
        strokeWidth={0}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fill="none"
        fillRule="nonzero"
        opacity={1}>
        <Path
          d="M40.135 90h-8.782a2.75 2.75 0 01-2.75-2.75V49.854a2.75 2.75 0 012.75-2.75h8.782a2.75 2.75 0 012.75 2.75V87.25a2.75 2.75 0 01-2.75 2.75zM58.647 90h-8.782a2.75 2.75 0 01-2.75-2.75V42.876a2.75 2.75 0 012.75-2.75h8.782a2.75 2.75 0 012.75 2.75V87.25a2.75 2.75 0 01-2.75 2.75zM21.624 90h-8.782a2.75 2.75 0 01-2.75-2.75V67.813a2.75 2.75 0 012.75-2.75h8.782a2.75 2.75 0 012.75 2.75V87.25a2.75 2.75 0 01-2.75 2.75zM77.158 90h-8.782a2.75 2.75 0 01-2.75-2.75V30.331a2.75 2.75 0 012.75-2.75h8.782a2.75 2.75 0 012.75 2.75V87.25a2.75 2.75 0 01-2.75 2.75z"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={fillColor}
          fillRule="nonzero"
          opacity={1}
        />
        <Path
          d="M18.74 49.47L15.72 46.85 34.68 25.05 53.32 21.13 71.44 4.93 74.1 7.91 55.19 24.83 36.81 28.68z"
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={fillColor}
          fillRule="nonzero"
          opacity={1}
        />
        <Circle
          cx={17.284}
          cy={48.373999999999995}
          r={6.464}
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={fillColor}
          fillRule="nonzero"
          opacity={1}
        />
        <Circle
          cx={35.744}
          cy={27.284}
          r={6.464}
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={fillColor}
          fillRule="nonzero"
          opacity={1}
        />
        <Circle
          cx={54.254}
          cy={22.234}
          r={6.464}
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={fillColor}
          fillRule="nonzero"
          opacity={1}
        />
        <Circle
          cx={72.764}
          cy={6.414000000000001}
          r={6.464}
          stroke="none"
          strokeWidth={1}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          fill={fillColor}
          fillRule="nonzero"
          opacity={1}
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
