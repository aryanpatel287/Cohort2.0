let card = document.querySelector('.card')
let imgDiv = document.querySelector('.imgDiv')
let likeIcon = document.querySelector('.like-icon')

imgDiv.addEventListener('dblclick', function () {
  likeIcon.style.opacity = 1;
  likeIcon.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)'
  setTimeout(() => {
    likeIcon.style.transform = 'translate(-50%,-300%) scale(1) rotate(0deg)'
  }, 800);
  setTimeout(() => {
    likeIcon.style.opacity = 0;
  }, 900)
  setTimeout(() => {
    likeIcon.style.transform = 'translate(-50%,50%) scale(0) rotate(-60deg)'
  }, 1200);
})

