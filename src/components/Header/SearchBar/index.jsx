import React, { useEffect, useRef } from 'react';

import { useCurrentStateAndParams, useRouter } from '@uirouter/react';

import './style.scss';

function Component() {
  const { state, params } = useCurrentStateAndParams();
  const router = useRouter();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = params.q || '';
  }, [params.q]);

  function handleSearch() {
    const query = inputRef.current.value;
    router.stateService.go('search', { q: query, p: 1 });
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="searchBar">
      <input ref={inputRef} type="search" onKeyDown={onKeyDown} />
      <button type="button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Component;
