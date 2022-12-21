import './index.css';
import display from './modules/display.js';
import { getAPI, setAPI } from './modules/api.js';

const form = document.querySelector('form');
const refesh = document.querySelector('.refesh');

const getScore = async () => {
  const scores = await getAPI();
  display(scores);
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = document.querySelector('#name');
  const userscore = document.querySelector('#score');
  const score = {
    user: username.value,
    score: userscore.value,
  };
  username.value = '';
  userscore.value = '';
  await setAPI(score);
});

refesh.addEventListener('click', async () => {
  getScore();
});

getScore();