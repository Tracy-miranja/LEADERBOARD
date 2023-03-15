export const fetchData = async () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iLDJ7NaS4vrrLkwwbZmu/scores/')
  .then((response) => response.json());
export const postScore = async (user, score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iLDJ7NaS4vrrLkwwbZmu/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => {
    if (response.ok) {
    //   callback(); // call the callback function if provided
    }
  });
};
