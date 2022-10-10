import './style.css';
import Scores from './modules/class.js';

const scoresContainer = document.querySelector('.scores-container');
const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');
const list = [];

// Display score list
const display = () => {
  const displayList = list.map((list) => `<p class="score-list">${list.name} : ${list.score} </p>`).join('');
  scoresContainer.innerHTML = displayList;
};

// To add scores to the list
submit.addEventListener('click', (e) => {
  const nameValue = document.querySelector('.name').value;
  const scoreValue = document.querySelector('.score').value;
  e.preventDefault();
  const scoreObject = new Scores(nameValue, scoreValue);
  list.push(scoreObject);
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
  display();
});

// Refresh the screen
refresh.addEventListener('click', () => {
  window.location.reload();
});
