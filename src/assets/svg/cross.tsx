import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SVGComponent = ({
  fillColor = '#fff',
  width = '20',
  height = '20',
}: {
  fillColor: string;
  width: string;
  height: string;
}) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={width}
    height={height}
    viewBox="0 0 122.88 122.88"
    style={{
      enableBackground: 'new 0 0 122.88 122.88',
    }}
    xmlSpace="preserve">
    <G>
      <Path
        fill={fillColor}
        d="M1.63,97.99l36.55-36.55L1.63,24.89c-2.17-2.17-2.17-5.73,0-7.9L16.99,1.63c2.17-2.17,5.73-2.17,7.9,0 l36.55,36.55L97.99,1.63c2.17-2.17,5.73-2.17,7.9,0l15.36,15.36c2.17,2.17,2.17,5.73,0,7.9L84.7,61.44l36.55,36.55 c2.17,2.17,2.17,5.73,0,7.9l-15.36,15.36c-2.17,2.17-5.73,2.17-7.9,0L61.44,84.7l-36.55,36.55c-2.17,2.17-5.73,2.17-7.9,0 L1.63,105.89C-0.54,103.72-0.54,100.16,1.63,97.99L1.63,97.99z"
      />
    </G>
  </Svg>
);

export default SVGComponent;
