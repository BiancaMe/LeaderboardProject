const addScore = async (path) => {
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': ' application/json',
    },
    body: JSON.stringify({
      user: name,
      score: number,
    }),
  }).then((res) => res.json()).then((data) => data);
};

export default addScore;