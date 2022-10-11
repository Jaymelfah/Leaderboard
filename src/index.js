import './style.css';
import { addNewScore, retrieveScores } from './modules/api.js';

const refresh = document.querySelector('.refresh');
const form = document.getElementById('form');

// To add scores to the list
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameValue = document.querySelector('.name').value;
  const scoreValue = document.querySelector('.score').value;
  addNewScore(nameValue, scoreValue);
  retrieveScores();
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
});

// Refresh the screen
refresh.addEventListener('click', retrieveScores);
