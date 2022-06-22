async function searchrepository(name) {
  return fetch(`https://api.github.com/users/${name}`)
    .then((result) => result.json())
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(`GitHub request error ${error}`);
      return null;
    });
}

export default searchrepository;
