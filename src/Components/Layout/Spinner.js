import React, { Fragment } from 'react';
import Spinner from './Spinner.gif';

// eslint-disable-next-line
const spinner = () => (
  <Fragment>
    <img
      src='Spinner'
      alt='Loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
