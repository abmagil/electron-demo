import { partialRight, sortBy } from 'lodash';
import calculateData from './nestedToSankey';

const sortNode = partialRight(sortBy, 'name');
const sortLinks = partialRight(sortBy, ['source', 'target']);

const simple = {
  basic: 1,
  simple: 2,
};

const simpleExpect = {
  nodes: [
    { name: 'basic' },
    { name: 'simple' },
    { name: 'total' },
  ],
  links: [
    {
      target: 'basic',
      source: 'total',
      value: 1,
    },
    {
      target: 'simple',
      source: 'total',
      value: 2,
    },
  ],
};

const singleNest = {
  cat1: {
    cat2: {
      cat3: 200,
    },
  },
};

const singleNestExpect = {
  nodes: [
    { name: 'cat1' },
    { name: 'cat2' },
    { name: 'cat3' },
  ],
  links: [
    {
      target: 'cat3',
      source: 'cat2',
      value: 200,
    },
    {
      target: 'cat2',
      source: 'cat1',
      value: 200,
    },
  ],
};

const total = {
  mainCat: {
    subcat1: 0,
    subcat2: 100,
    subcat3: {
      subcat4: 200,
      subcat5: 1,
    },
  },
  secondCat: {
    subcat6: 300,
  },
  thirdCat: {
    subcat7: 0,
    subcat8: 0,
  },
};

const expected = {
  nodes: [
    { name: 'mainCat' },
    { name: 'subcat2' },
    { name: 'subcat3' },
    { name: 'subcat4' },
    { name: 'subcat5' },
    { name: 'secondCat' },
    { name: 'subcat6' },
    { name: 'total' },
  ],
  links: [
    {
      target: 'subcat2',
      source: 'mainCat',
      value: 100,
    },
    {
      target: 'subcat3',
      source: 'mainCat',
      value: 201,
    },
    {
      target: 'subcat4',
      source: 'subcat3',
      value: 200,
    },
    {
      target: 'subcat5',
      source: 'subcat3',
      value: 1,
    },
    {
      target: 'subcat6',
      source: 'secondCat',
      value: 300,
    },
    {
      target: 'mainCat',
      source: 'total',
      value: 301,
    },
    {
      target: 'secondCat',
      source: 'total',
      value: 300,
    },
  ],
};


describe('calculateData', () => {
  it('handles the simple case', () => {
    const sut = calculateData(simple);

    expect(sortNode(sut.nodes)).toEqual(sortNode(simpleExpect.nodes));
    expect(sortLinks(sut.links)).toEqual(sortLinks(simpleExpect.links));
  });

  it('recurses through a tree', () => {
    const sut = calculateData(singleNest);

    expect(sortNode(sut.nodes)).toEqual(sortNode(singleNestExpect.nodes));
    expect(sortLinks(sut.links)).toEqual(sortLinks(singleNestExpect.links));
  });


  it('filters 0s out of results', () => {
    expect(sortNode(calculateData(total).nodes)).toEqual(sortNode(expected.nodes));
    expect(sortLinks(calculateData(total).links)).toEqual(sortLinks(expected.links));
  });
});
