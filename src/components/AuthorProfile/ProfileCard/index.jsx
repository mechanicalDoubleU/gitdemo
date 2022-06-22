import React from 'react';

import { AuthorProfileType, AuthorProfileDefaults } from '../types';

import './style.scss';

function Component({ data }) {
  return (
    <article className="profileCard">
      <img className="profileCard_avatar" src={data?.avatar_url} alt={`${data?.name} avatar`} />
      <div className="profileCard_info">
        <div className="profileCard_name">{`Name: ${data?.name}`}</div>
        <div className="profileCard_login">{`Nickname: ${data?.login}`}</div>
        <div className="profileCard_bio">{`Bio: ${data?.bio}`}</div>
        <a className="profileCard_link" href={data?.html_url}>GitHub</a>
      </div>
    </article>
  );
}

Component.defaultProps = {
  data: AuthorProfileDefaults,
};

Component.propTypes = {
  data: AuthorProfileType,
};

export default Component;
