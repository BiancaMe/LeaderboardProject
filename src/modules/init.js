import addScore from './addScore';
import { displayScores, getScores } from './displayScores';

const path = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Cse11ypshOMXFyhXNfIj/scores';

window.onload = async () => {
  const scores = await getScores(path);
  displayScores(scores);
};

export const initAddScore = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    addScore(path);
    document.getElementById('form').reset();
  });
};

export const initRefresh = () => {
  document.getElementById('refresh').addEventListener('click', async () => {
    document.getElementById('s-list').innerHTML = `<tr><div id="loading"><div class="loader"></div>
                                                        <p>Loading</p></div></tr>`;
    const scores = await getScores(path);
    document.getElementById('s-list').innerHTML = '';
    displayScores(scores);
  });
};
