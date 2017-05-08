import React from 'react';
import UndecoratedDefinitionList from './DefinitionList';
import UndecoratedOrderedList from './OrderedList';
import UndecoratedUnorderedList from './UnorderedList';
import TagWithTitle from '../TagWithTitle';

const DefinitionList = TagWithTitle(UndecoratedDefinitionList);
const OrderedList = TagWithTitle(UndecoratedOrderedList);
const UnorderedList = TagWithTitle(UndecoratedUnorderedList);

const Lists = () => (
  <div>
    <UnorderedList />
    <OrderedList />
    <DefinitionList />
  </div>
)

export default Lists;
