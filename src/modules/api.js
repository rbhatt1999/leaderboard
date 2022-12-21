const getAPI = async ()=> {
  let fetch = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9ACnXnCcLT7JlGQEL7f8/scores/');
  let result = await fetch.json();
  return result;
}

const setAPI = async (scores)=> {
  let fetch = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9ACnXnCcLT7JlGQEL7f8/scores/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(scores),
  });
  let result = await fetch.json();
  return result;
}

export {getAPI, setAPI};