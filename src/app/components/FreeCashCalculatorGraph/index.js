import React from 'react';

import SankeyDriver from './SankeyDriver';
import SankeyChart from './SankeyChart';

const SpendingForm = ({ data }) => {
  return (
    <SankeyDriver {...data} width={450} height={250}>
      {(nodes, links, width, height) => (
        <div>
          <SankeyChart nodes={nodes} links={links} width={width} height={height} />
        </div>
      )}
    </SankeyDriver>);
};

export default SpendingForm;
