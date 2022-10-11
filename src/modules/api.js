import Scores from './class.js';

// Display score list
const display = (gameData) => {
  const scoresContainer = document.querySelector('.scores-container');
  scoresContainer.innerHTML = '';
  gameData = gameData.sort((a, b) => b.score - a.score);
  const displayList = gameData.map((list) => `<p class="score-list">${list.user} : ${list.score} </p>`).join('');
  scoresContainer.innerHTML = displayList;
};

// add scores
const addNewScore = async (user, score) => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${baseUrl}games/`;
  const gameID = '9QuaUUOYerQXwfwibGq2';
  const payloadObject = new Scores(user, score);
  const response = await fetch(`${url}${gameID}/scores/`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(payloadObject),
  });
  const gameData = await response.json();
  return gameData;
};

// retrieve scores
const retrieveScores = async () => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${baseUrl}games/`;
  const gameID = '9QuaUUOYerQXwfwibGq2';
  const response = await fetch(`${url}${gameID}/scores/`);
  const gameData = await response.json();
  if (response.ok) {
    display(gameData.result);
  }
};

export { addNewScore, retrieveScores };