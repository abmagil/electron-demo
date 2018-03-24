import { format } from 'd3-format';
import { sankeyLinkHorizontal} from 'd3-sankey';
import {select} from 'd3-selection';
import {scaleOrdinal, schemeCategory10} from 'd3-scale';
import {transition} from 'd3-transition';
import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

class SankeyChart extends Component {

  constructor() {
    super();
    this.formatNumber = format(',.0f');
    this.formatNum = function(d) { return `$${this.formatNumber(d)}`; };
    this.color = scaleOrdinal(schemeCategory10);

    ['nodeEnter', 'nodeUpdate', 'linkEnter', 'linkUpdate'].forEach((methodName) => {
      this[methodName] = this[methodName].bind(this);
    });
  }

  componentDidMount() {
    this.svg = select(findDOMNode(this));
    const svg = this.svg;
    
    this.link = svg.append('g')
        .attr('class', 'links')
        .attr('fill', 'none')
        .attr('stroke', '#000')
        .attr('stroke-opacity', 0.2)
      .selectAll('path')
        .data(this.props.links, this.linkKeyFn);

    this.link.enter()
      .append('path')
        .call(this.linkEnter)
      .merge(this.link)
        .call(this.linkUpdate);

    this.node = svg.append('g')
        .attr('class', 'nodes')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 10)
      .selectAll('g')
        .data(this.props.nodes, (node) => (node.name));

    this.node.enter().append('g')
      .call(this.nodeEnter)
    .merge(this.node)
        .call(this.nodeUpdate);
  }
  
  componentDidUpdate() {
    this.link = select('g.links').selectAll('path')
      .data(this.props.links, this.linkKeyFn);
    this.link.exit().remove();
    this.link.enter()
      .append('path').call(this.linkEnter)
    .merge(this.link)
      .call(this.linkUpdate);

    this.node = select('g.nodes').selectAll('g')
      .data(this.props.nodes, (node) => (node.name))
      .order();
    this.node.exit().remove();
    this.node.enter()
      .append('g').call(this.nodeEnter)
    .merge(this.node)
      .call(this.nodeUpdate);
  }

  nodeEnter(node) {
    node.append('rect');
    node.append('text');
    node.append('title');
  }

  nodeUpdate(node) {
    node.select('rect')
      .transition(this.transition)
      .attr('x', function(d) { return d.x0; })
      .attr('y', function(d) { return d.y0; })
      .attr('height', function(d) { return d.y1 - d.y0; })
      .attr('width', function(d) { return d.x1 - d.x0; })
      .attr('fill', (d) => { return this.color(d.name.replace(/ .*/, '')); })
      .attr('stroke', '#000');
      
    node.select('text')
      .transition(this.transition)
      .attr('x', function(d) { return d.x0 - 6; })
      .attr('y', function(d) { return (d.y1 + d.y0) / 2; })
      .attr('dy', '0.35em')
      .attr('text-anchor', 'end')
      .text(function(d) { return d.name; })
      .filter((d) => { return d.x0 < this.props.width / 2; })
      .attr('x', function(d) { return d.x1 + 6; })
      .attr('text-anchor', 'start');
      
    node.select('title')
      .text(function(d) { return d.name + '\n' + format(d.value); });
  }

  linkEnter(link) {
    link.append('title')
      .text((d) => (`${d.source.name} → ${d.target.name}\n${this.formatNum(d.value)}`));
  }

  linkUpdate(link) {
    link
      .transition(this.transition)
      .attr('d', sankeyLinkHorizontal())
      .attr('stroke-width', (d) => (Math.max(1, d.width)));
  }

  linkKeyFn(link) {
    return `${link.source.name}->${link.target.name}`;
  }

  transition(selection) {
    return transition(selection)
      .duration(750);
  }

  render() {
    return (
      <svg width={this.props.width} height={this.props.height} />
    );
  }
}

export default SankeyChart;
