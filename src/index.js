import './style.css';
import { fetchData, postScore } from './modules/get.js';
import displayData from './modules/data.js';

const refresh = document.querySelector('#refresh');
const submit = document.querySelector('#cll');

window.onload = async () => {
  fetchData();
  const data = await fetchData();
  displayData(data);
};
submit.addEventListener('click', async (e) => {
  e.preventDefault();
  const user = document.getElementById('user');
  const score = document.getElementById('score');
  if (user.value && score.value) {
    await postScore(user.value, score.value);
    user.value = '';
    score.value = '';
    await fetchData();
    const data = await fetchData();
    displayData(data); 
  }
});

refresh.addEventListener('click', async () => {
  window.location.reload();
  const data = await fetchData();
  displayData(data);
});
