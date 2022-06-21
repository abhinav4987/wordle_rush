import * as React from 'react';
import Svg, {G, Polygon} from 'react-native-svg';

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
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 32 32"
    style={{
      enableBackground: 'new 0 0 32 32',
    }}
    width={width}
    height={height}
    xmlSpace="preserve">
    <G>
      <G id="check">
        <G>
          <Polygon
            style={{
              fill: fillColor,
            }}
            points="11.941,28.877 0,16.935 5.695,11.24 11.941,17.486 26.305,3.123 32,8.818  "
          />
        </G>
      </G>
    </G>
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
