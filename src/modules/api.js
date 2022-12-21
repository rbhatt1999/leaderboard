const getAPI = async () => {
  const fetchData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9ACnXnCcLT7JlGQEL7f8/scores/');
  const result = await fetchData.json();
  return result;
};

const setAPI = async (scores) => {
  const fetchData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9ACnXnCcLT7JlGQEL7f8/scores/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(scores),
  });
  const result = await fetchData.json();
  return result;
};

export { getAPI, setAPI };