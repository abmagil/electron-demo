import React from 'react';
import 'app.scss';

const getStyle = (colorHex) => {
  console.log(colorHex);
  return {
    background: colorHex
  }
}

const ColorSwatch = (colorHex) => (
  <div key={colorHex} className='colorSwatch' style={getStyle(colorHex)}>
    <p>{colorHex}</p>
  </div>
);

const colors = [
  '#f6f6f6',
  '#ddd',
  '#AAA',
  '#585858',
  '#2e2e2e',
  '#fffff8',
  '#111111',
  '#17AB00',
  '#FFFB3D',
  '#FA0012',
  '#042768'
];

const ColorPalette = () => (
  <ul>
    {colors.map((colorHex) => ColorSwatch(colorHex))}
  </ul>
)

export default ColorPalette;
