import React from 'react';

import PropTypes from 'prop-types';
import RepositoryCard from './RepositoryCard';
import './style.scss';
import { RepositoryType } from '../types';

function Component({ list }) {
  return (
    <div className="repositoryList">
      {list.map((item) => <RepositoryCard key={item.id} data={item} />)}
    </div>
  );
}

Component.defaultProps = {};

Component.propTypes = {
  list: PropTypes.arrayOf(RepositoryType).isRequired,
};

export default Component;
