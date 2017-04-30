/* eslint-disable react/display-name */
import React from 'react';

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}

function PascalToHuman(pascalCased) {
  return pascalCased
    .match(/[A-Za-z][a-z]*/g)
    .map(capitalize)
    .join(' ');
}

export default function TagWithTitle(TagComponent) {
  return () => (
    <div>
      <h3>{PascalToHuman(TagComponent.name)}</h3>
      <TagComponent />
    </div>
  );
}
/* eslint-enable */
