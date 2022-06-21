import React, { useEffect, useState } from 'react';
import { useCurrentStateAndParams } from '@uirouter/react';

import RepositoryList from './RepositoryList';
import ListPaginator from './ListPaginator';

import projectSearch from '../../common/api/projectSearch';

import { API_STATES } from '../../common/constants/enums';

import './style.scss';

const PER_PAGE = 20;
const PAGINATION_CLUSTER_LENGTH = 5;

function formPagination(data, page, perPage) {
  const totalPages = Math.ceil(data.total_count / perPage);

  const paginationConstruct = {
    first: 1,
    last: totalPages,
    clusterStart: page - Math.floor(PAGINATION_CLUSTER_LENGTH / 2),
    clusterEnd: page + Math.round(PAGINATION_CLUSTER_LENGTH / 2) + 1,
    current: page,
  };

  const pagination = {};

  if (page < 1) {
    paginationConstruct.current = 1;
  } else if (page > totalPages) {
    paginationConstruct.current = totalPages;
  }

  for (let index = paginationConstruct.first; index < paginationConstruct.last + 1; index += 1) {
    if (
      index === 1
      || index === paginationConstruct.last
      || (index >= paginationConstruct.clusterStart && index < paginationConstruct.clusterEnd)
    ) {
      pagination[index * 2] = { page: index, key: index * 2 };
      if (index === page) {
        pagination[index * 2].current = true;
      }
      if (!pagination[(index - 1) * 2] && index !== 1) {
        pagination[index * 2 - 1] = { page: null, elipsis: true, key: index * 2 - 1 };
      }
    }
  }

  if (paginationConstruct.current !== 1) {
    pagination[0] = {
      page: paginationConstruct.current - 1,
      sequential: '←',
      key: 0,
    };
  }

  if (paginationConstruct.current !== totalPages) {
    pagination[paginationConstruct.last * 2] = {
      page: 1 + paginationConstruct.current,
      sequential: '→',
      key: totalPages,
    };
  }

  return Object.entries(pagination).sort((a, b) => a[0] - b[0]).map((item) => item[1]);
}

function formProjectList(data) {
  return data.items;
}

function Component() {
  const { params } = useCurrentStateAndParams();
  const [projects, setProjects] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [searchState, setSearchState] = useState(API_STATES.EMPTY);

  function handleSearchResult(result) {
    if (result === null || result === undefined) {
      setSearchState(API_STATES.ERROR);
      return;
    }
    setSearchState(API_STATES.LOADED);

    setPagination(() => formPagination(result, parseInt(params.p, 10), PER_PAGE));
    setProjects(() => formProjectList(result));
  } // TODO: memoize stuff

  useEffect(() => {
    if (params.q && (params.p || params.p === 0)) {
      setSearchState(API_STATES.LOADING);
      projectSearch(params.q, params.p, PER_PAGE)
        .then((result) => handleSearchResult(result));
    }
  }, [params]);

  return (
    <section className="projectSearch">
      {searchState === API_STATES.LOADED && (
      <>
        <RepositoryList list={projects} />
        <ListPaginator pagination={pagination} params={params} />
      </>
      )}
      {
        searchState === API_STATES.EMPTY
        && <div>Search for projects on GitHub</div>
      }
      {
        searchState === API_STATES.ERROR
        && <div>Search error occurred. Please, try again.</div>
      }
      {
        searchState === API_STATES.LOADING
        && <div>Searching...</div>
      }
    </section>
  );
}

export default Component;