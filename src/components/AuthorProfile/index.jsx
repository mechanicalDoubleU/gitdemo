import React, { useEffect, useState } from 'react';
import { useCurrentStateAndParams } from '@uirouter/react';

import ProfileCard from './ProfileCard';

import authorProfile from '../../common/api/authorProfile';
import { API_STATES } from '../../common/constants/enums';

import './style.scss';

function Component() {
  const { params } = useCurrentStateAndParams();
  const [profile, setProfile] = useState(null);
  const [profileState, setProfileState] = useState(API_STATES.EMPTY);

  function handleProfile(data) {
    if (!data) {
      setProfileState(API_STATES.ERROR);
      return;
    }
    setProfileState(API_STATES.LOADED);
    setProfile(data);
  }

  useEffect(() => {
    if (params.name) {
      setProfileState(API_STATES.LOADED);
      authorProfile(params.name)
        .then((result) => handleProfile(result));
    }
  }, [params.name]);
  return (
    <section className="authorProfile">
      {
        profileState === API_STATES.LOADED
        && <ProfileCard data={profile} />
      }
      {
        profileState === API_STATES.EMPTY
        && <div>Quick view of GitHub user profile</div>
      }
      {
        profileState === API_STATES.ERROR
        && <div>Profile load error occurred. Please, try again.</div>
      }
      {
        profileState === API_STATES.LOADING
        && <div>Loading profile...</div>
      }
    </section>
  );
}

export default Component;
