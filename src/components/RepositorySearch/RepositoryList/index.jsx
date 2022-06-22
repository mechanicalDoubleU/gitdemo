import React from 'react';

import RepositoryCard from './RepositoryCard';
import './style.scss';


function Component({ list }) {
  return (
    <div className="repositoryList">
      {list.map((item) => <RepositoryCard key={item.id} data={item} />)}
    </div>
  );
}

export default Component;
