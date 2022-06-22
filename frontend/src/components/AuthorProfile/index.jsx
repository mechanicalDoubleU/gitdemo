import React, { useEffect, useState } from 'react';
import { useCurrentStateAndParams } from '@uirouter/react';

import ProfileCard from './ProfileCard';
import Button from '../../common/components/Button';
import Spinner, { SPINNER_MODE } from '../../common/components/Spinner';
import Plaque from '../../common/components/Plaque';
import fetchAuthorProfile from '../../common/api/authorProfile';
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

    const profileData = {
      avatar_url: data?.avatar_url,
      name: data?.name,
      login: data?.login,
      bio: data?.bio,
      html_url: data?.html_url,
    };

    setProfile(profileData);
  }

  useEffect(() => {
    if (params.authorName) {
      setProfileState(API_STATES.LOADING);
      fetchAuthorProfile(params.authorName)
        .then((result) => handleProfile(result));
    }
  }, [params.authorName]);

  return (
    <section className="authorProfile">
      <Button
        onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          history.back();
        }}
        text="Back"
      />
      {
        profileState === API_STATES.LOADED
        && <ProfileCard data={profile} />
      }
      {
          (profileState === API_STATES.LOADING || profileState === API_STATES.UPDATING) && (
            <Spinner mode={SPINNER_MODE.ABSOLUTE} />
          )
        }
      {
        profileState === API_STATES.EMPTY
        && <Plaque text="Quick view of GitHub user profile" />
      }
      {
        profileState === API_STATES.ERROR
        && <Plaque text="Profile load error occurred. Please, try again." />
      }
      {
        profileState === API_STATES.LOADING
        && <Plaque text="Loading profile..." />
      }
    </section>
  );
}

export default Component;
