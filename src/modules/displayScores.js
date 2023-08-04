export const getScores = async (path) => {
  try {
    const info = await fetch(path);
    const scores = await info.json();
    return scores.result;
  } catch (error) {
    return error;
  }
};

export const displayScores = (scores) => {
  const table = document.getElementById('s-list');
  scores.sort((a, b) => b.score - a.score).forEach((elem) => {
    const add = document.createElement('tr');
    add.setAttribute('class', 's-item');
    add.innerHTML = `<th class="s-name">${elem.user} : ${elem.score}</th>`;
    table.appendChild(add);
  });
};
