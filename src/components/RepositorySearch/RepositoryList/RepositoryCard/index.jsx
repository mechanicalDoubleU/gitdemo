/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSref } from '@uirouter/react';

import { RepositoryType, RepositoryDefault } from '../../types';
import './style.scss';

function Component({ data }) {
  const sref = useSref('profile', { name: data.owner.login });
  return (
    <article className="repositoryCard">
      <a {...sref} className="repositoryCard_container">
        <div className="repositoryCard_desc">
          <div className="repositoryCard_name">{data.full_name}</div>
          <div className="repositoryCard_author">{`by: ${data.owner.login}`}</div>
        </div>
        <div className="repositoryCard_stats">
          <div className="repositoryCard_language">{data.language}</div>
          <div className="repositoryCard_stars">{`⭐ ${data.stargazers_count}`}</div>
        </div>
      </a>
    </article>
  );
}

Component.defaultProps = {
  data: RepositoryDefault,
};

Component.propTypes = {
  data: RepositoryType,
};

export default Component;
