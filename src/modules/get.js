export const fetchData = async () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mrXEYzwGgJCvWC7TIRkf/scores/')
  .then((response) => response.json());
export const postScore = async (user, score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mrXEYzwGgJCvWC7TIRkf/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};