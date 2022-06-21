import React, { useEffect, useRef } from 'react';

import { useCurrentStateAndParams, useRouter } from '@uirouter/react';

import Button from '../../../common/components/Button';

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
      <Button onClick={() => handleSearch()} text="Search" />
    </div>
  );
}

export default Component;
