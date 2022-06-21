/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSref } from '@uirouter/react';
import './style.scss';

function Component({ data }) {
  const sref = useSref('profile', { name: data.owner.login });
  return (
    <article className="repositoryCard">
      <a {...sref}>
        <div>{data.full_name}</div>
        <div>{data.owner.login}</div>
        <div>{data.language}</div>
        <div>{`⭐ ${data.stargazers_count}`}</div>
      </a>
    </article>
  );
}

export default Component;