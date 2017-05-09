import React from 'react';

import './ColorSwatch.scss'

const getStyle = (colorHex) => (
  { background: colorHex }
)

const ColorSwatch = (colorHex) => (
  <li key={colorHex} className='colorSwatch' style={getStyle(colorHex)}>
    <p className='colorSwatch__name'>{colorHex}</p>
  </li>
);

export default ColorSwatch;
