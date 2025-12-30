let downloadBtn = document.querySelector('.download-btn')
let loadingInner = document.querySelector('.loading-inner')
let loadingSpeed = document.querySelector('.loadingSpeed')
let card = document.querySelector('.card')
let downloadStatus = document.createElement('p')

let grow = 0;
downloadBtn.addEventListener('click', function () {
  downloadBtn.style.pointerEvents = 'none'

  let downloadSpeed = 50 + Math.floor(Math.random() * 50)


  console.log(downloadSpeed)
  let int = setInterval(() => {
    grow++
    loadingInner.style.width = grow + "%"
    loadingSpeed.innerHTML = grow + '%'
  }, downloadSpeed)


  setTimeout(() => {
    clearInterval(int)
    downloadBtn.innerHTML = "Downloaded"
    downloadBtn.style.opacity = 0.5
    downloadStatus.innerHTML = `Downloaded in ${downloadSpeed / 10} Seconds`
    card.appendChild(downloadStatus)
  }, downloadSpeed * 100)
})