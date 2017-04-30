import React from 'react';

import ColorSwatch from './ColorSwatch';
import './ColorPalette.scss';

const greyscales = [
  '#f6f6f6',
  '#ddd',
  '#AAA',
  '#585858',
  '#2e2e2e',
  '#fffff8',
  '#111111',
];

const colors = [
  '#17AB00',
  '#FFFB3D',
  '#FA0012',
  '#042768'
];

const ColorPalette = () => (
  <section className='StyleguideSection' id='colorPalette'>
    <h2 className='StyleguideSection__title'>App Colors</h2>
    <h3>Greyscales</h3>
    <ul className='colorPalette'>
      {greyscales.map((colorHex) => ColorSwatch(colorHex))}
    </ul>
    <h3>Colors</h3>
    <ul className='colorPalette'>
      {colors.map((colorHex) => ColorSwatch(colorHex))}
    </ul>
  </section>
);

export default ColorPalette;
