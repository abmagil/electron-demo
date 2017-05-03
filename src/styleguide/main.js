import React from 'react';
import { render } from 'react-dom';

import Styleguide from './';
import styles from './main.scss';

render(<Styleguide />, document.querySelector('#app'));
