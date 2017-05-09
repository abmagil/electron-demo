import React from 'react';
import TagWithTitle from '../TagWithTitle';

const ButtonsAndLinks = () => (
  <div>
    <div>
      <button>An example button</button>
    </div>
    <div>
      <a href='#'>A standard hyperlink</a>
    </div>
  </div>
);

export default TagWithTitle(ButtonsAndLinks);
