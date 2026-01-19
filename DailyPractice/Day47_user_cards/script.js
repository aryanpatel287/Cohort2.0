let main = document.querySelector('main')
let card = document.querySelector('.card')

fetch('https://randomuser.me/api/?results=50')
  .then(raw => { return raw.json() })
  .then(data => {
    let users = data.results
    let userCards = ''
    users.forEach(function (elem) {
      console.log(elem)
      userCards = userCards + `<div class="card">
        <img class="userImg" src="${elem.picture.large}" alt="">
        <div class="user-details">
          <h2 class="userName">${elem.name.first +" "+elem.name.last}</h2>
          <h3 class="user-location">${elem.location.city}, ${elem.location.country}</h3>
          <h4 class="user-email">${elem.email}</h4>
          <p class="user-contact">${elem.phone}</p>
        </div>
      </div>`
    })
    main.innerHTML = userCards

  })
  .catch(err => { console.log(err) })
