async function searchRepository(query, page, perPage) {
  return fetch(`https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${perPage}`)
    .then((result) => result.json())
    .catch((error) => {
      console.error(`GitHub request error ${error}`);
      return null;
    });
}

export default searchRepository;
