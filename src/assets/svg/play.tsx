import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

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
    viewBox="0 0 496 496"
    style={{
      enableBackground: 'new 0 0 496 496',
    }}
    xmlSpace="preserve">
    <Path
      style={{
        fill: '#000',
      }}
      d="M496,248c0,136.8-111.2,248-248,248S0,384.8,0,248S111.2,0,248,0S496,111.2,496,248z"
    />
    <Path
      style={{
        fill: '#000',
      }}
      d="M248,0c136.8,0,248,111.2,248,248S384.8,496,248,496"
    />
    <Path
      style={{
        fill: '#000',
      }}
      d="M72.8,72.8c96.8-96.8,253.6-96.8,350.4,0s96.8,253.6,0,350.4"
    />
    <Path
      style={{
        fill: '#000',
      }}
      d="M212.8,360.8c-1.6,0-4-0.8-5.6-1.6c-4-1.6-7.2-6.4-7.2-10.4V199.2c0-4,3.2-8.8,7.2-10.4 c4-1.6,8.8-1.6,12.8,0.8l101.6,75.2c3.2,2.4,4.8,5.6,4.8,9.6s-1.6,7.2-4.8,9.6L220,359.2C217.6,360,215.2,360.8,212.8,360.8z"
    />
    <Path
      style={{
        fill: '#FFFFFF',
      }}
      d="M212.8,334.4c-1.6,0-4-0.8-5.6-1.6c-4-1.6-7.2-6.4-7.2-10.4V172.8c0-4,3.2-8.8,7.2-10.4 c4-1.6,8.8-1.6,12.8,0.8l101.6,75.2c3.2,2.4,4.8,5.6,4.8,9.6c0,4-1.6,7.2-4.8,9.6L220,332.8C217.6,333.6,215.2,334.4,212.8,334.4z"
    />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
  </Svg>
);

export default SVGComponent;
