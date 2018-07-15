//@flow

import {
  isNumber,
  size,
  sum,
  toPairs
} from 'lodash';

const toNode = (nodeName) => ({name: nodeName});

const calculateLayer = (parent: null|string, key: string, value, nodeSet, linkSet): number => {
  let weight: number = 0;
  if (isNumber(value)) {
    weight = value;
  } else {
    const kvPairs = toPairs(value);
    const childWeights = kvPairs.map(([k,v]) => calculateLayer(key, k, v, nodeSet, linkSet));
    weight = sum(childWeights);
  }

  if (weight > 0) {
    nodeSet.add(key);
    if (parent) {
      linkSet.add({
        source: parent,
        target: key,
        value: weight,
      });
    }
  }
  return weight; // weight for entire layer
};

type NodeType = {name: string}

type LinkType = {source: null|string, target: string, value: number}

type SankeyOutputDataType = {nodes: Array<NodeType>, links: Array<LinkType>}

type SankeyInputDataType = ObjectOf<number|SankeyInputDataType>

export default (data: SankeyInputDataType): SankeyOutputDataType => {
  let rootedData; // function requires a single root node
  if(size(data) !== 1) {
    rootedData = {
      total: data,
    };
  } else {
    rootedData = data;
  }

  const nodeSet = new Set();
  const linkSet = new Set();
  const root: string = Object.keys(rootedData)[0];
  calculateLayer(null, root, rootedData[root], nodeSet, linkSet);

  return {
    // spreading the set converts to an array
    nodes: [...nodeSet].map(toNode),
    links: [...linkSet],
  };
};
