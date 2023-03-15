
const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const getID = async() => {
const request = await fetch(BASE_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"name": 'Leaderboard'})
})
const response = await request.text();
console.log(response)
}

getID()