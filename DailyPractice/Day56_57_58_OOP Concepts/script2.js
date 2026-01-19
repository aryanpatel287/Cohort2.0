// Day 58 Question Sheet 2


fetch('https://randomuser.me/api/')
    .then(raw => { return raw.json() })
    .then(data => { console.log(data.results[0]) })
    .catch(err => { console.log(err) })