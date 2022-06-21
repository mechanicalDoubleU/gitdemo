import React from 'react';

import './style.scss';

function Component({ data }) {
  return (
    <article>
      <img src={data.avatar_url} alt={`${data.name} avatar`} />
      <div>{data.name}</div>
      <div>{data.login}</div>
      <div>{data.bio}</div>
      <a href={data.html_url}>GitHub</a>
    </article>
  );
}

export default Component;
