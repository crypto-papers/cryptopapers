// @flow

import React from 'react';

import './Loader.scss';

const Loader = ({ mode }: { mode?: string }) => {
  const varient = mode === 'dark' ? 'dark' : 'light';

  return (
    <div styleName='bouncing-loader'>
      <div styleName={`bouncing-loader-ellipse ${varient}`} />
      <div styleName={`bouncing-loader-ellipse ${varient}`} />
      <div styleName={`bouncing-loader-ellipse ${varient}`} />
    </div>
  );
};

export default Loader;
