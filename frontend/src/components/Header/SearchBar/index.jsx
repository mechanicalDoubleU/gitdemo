import React, { useEffect, useRef } from 'react';

import { useCurrentStateAndParams, useRouter } from '@uirouter/react';

import Button from '../../../common/components/Button';

import './style.scss';

function Component() {
  const { params } = useCurrentStateAndParams();
  const router = useRouter();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = params.query || '';
  }, [params.query]);

  function handleSearch() {
    const query = inputRef.current.value;
    router.stateService.go('search', { query, page: 1 }, { notify: false });
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="searchBar">
      <input ref={inputRef} type="search" onKeyDown={onKeyDown} className="searchBar_input" />
      <Button onClick={() => handleSearch()} text="Search" className="searchBar_button" />
    </div>
  );
}

export default Component;
