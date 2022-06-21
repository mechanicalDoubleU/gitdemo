import React from 'react';

import RepositoryCard from './RepositoryCard';
import './style.scss';


function Component({ list }) {
  return (
    <div className="projectList">
      {list.map((item) => <RepositoryCard key={item.id} data={item} />)}
    </div>
  );
}

export default Component;
