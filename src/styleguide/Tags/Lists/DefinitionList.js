import React from 'react';

const DefinitionList = () => (
  <dl>
    <dt>A definition key</dt>
    <dd>A definition value</dd>
    <dt>Another Key, much longer than the first</dt>
    <dt>A related key to the above long-name key</dt>
    <dd>The singular value for the two previous keys</dd>
    <dt>A single key, which has many values</dt>
    <dd>The first value</dd>
    <dd>The second value</dd>
    <dd>The third value</dd>
  </dl>
);

export default DefinitionList;
