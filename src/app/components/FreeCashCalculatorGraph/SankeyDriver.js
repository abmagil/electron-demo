import {sankey, sankeyJustify} from 'd3-sankey';
import React, {Component} from 'react';
import {
  cloneDeep,
  filter,
  sortBy,
  partialRight
} from 'lodash';

const sortNodes = partialRight(sortBy, 'name');
const sortLinks = partialRight(sortBy, 'source.name');

class SankeyDriver extends Component {
  constructor(props) {
    super(props);
    this.width = props.width;
    this.height = props.height;
    this.sankeyGraph = sankey()
      .nodeWidth(15)
      .nodeId((d) => (d.name))
      .nodeAlign(sankeyJustify)
      .nodePadding(10)
      .extent([[1, 1], [this.width - 1, this.height - 6]]);
  }

  filterFn(o){
    return parseInt(o.value, 10) > 0;
  }

  render() {
    const sortedNodes = sortNodes(this.props.nodes);
    const sortedLinks = sortLinks(this.props.links);
    
    const {nodes, links} = this.sankeyGraph({
      nodes: cloneDeep(sortedNodes),
      links: cloneDeep(filter(sortedLinks, this.filterFn)),
    });
    
    return (
      <div>
        {this.props.children(nodes, links, this.width, this.height)}
      </div>
    );
  }   
}

export default SankeyDriver;
