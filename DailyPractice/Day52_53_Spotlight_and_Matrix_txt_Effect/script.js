let effectBtnWrapper = document.querySelector('.effect-btn-wrapper')
let effectChangeBtn = document.querySelector('.effect-change-btn')
let spotlight = document.querySelector('.spotlight')
let spotlightIsActive = true;
let matrixTextContainer = document.querySelector(".matrix-txt-container")
let matrixEffectIsActive = false
const para = document.querySelector('.matrix-txt')
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
let txt = para.innerText
let input = document.querySelector('input')
let inputIsActive = false
let customTxtBtn = document.querySelector('.custom-txt-btn')
let modalOverlay = document.querySelector('.modal-overlay')
let cancelModalBtn = document.querySelector('.cancel-modal-btn')
let submitModalBtn = document.querySelector('.submit-modal-btn')


//Show Custom txt Button after Matrix Effects is Executed once
function showCustomTxtBtn() {
  customTxtBtn.style.opacity = 1;
  customTxtBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active')
    matrixTextContainer.style.opacity = 0
    effectBtnWrapper.style.opacity = 0
    modalTasks();
  })
}


// Modal will perform below tasks when it is active
function modalTasks() {
  cancelModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    matrixTextContainer.style.opacity = 1
    effectBtnWrapper.style.opacity = 1
  })

  submitModalBtn.addEventListener('click', () => {
    para.textContent = input.value
    txt = para.innerText
    modalOverlay.classList.remove('active')
    effectBtnWrapper.style.opacity = 1
    matrixTextContainer.style.opacity = 1

  })
}


//Matrix Effect starts
function matrixEffect() {
  para.addEventListener('mouseenter', () => {
    if (matrixEffectIsActive == true) {
      return
    }
    matrixEffectIsActive = true

    // Main Matrix Effect code
    let iteration = 0;
    const matrixTextInterval = setInterval(() => {
      let str = txt.split('').map((char, idx) => {
        if (idx < iteration) {
          return char
        }
        return characters.split('')[Math.floor(Math.random() * characters.length)]
      }).join('')
      iteration += 0.5;
      para.innerText = str

      if (iteration >= txt.length) {
        clearInterval(matrixTextInterval)
        matrixEffectIsActive = false
        showCustomTxtBtn()
      }
    }, 30);
  })

}


//Change Effect Btn
effectChangeBtn.addEventListener('click', () => {
  if (spotlightIsActive == true) {
    spotlight.style.opacity = 0
    matrixTextContainer.style.opacity = 1
    spotlightIsActive = false
    effectChangeBtn.textContent = "SpotLight Effect"
    document.body.style.setProperty('--btn-bg-color', 'rgba(20, 20, 20, 0.75)')
    document.querySelector('main').classList.add('active')
    matrixEffect()
  } else {
    spotlight.style.opacity = 1
    matrixTextContainer.style.opacity = 0
    spotlightIsActive = true
    effectChangeBtn.textContent = "Matrix text Effect"
    document.body.style.setProperty('--btn-bg-color', '#222')
    document.querySelector('main').classList.remove('active')

  }
})


//Spotlight Effect
addEventListener('mousemove', (cursor) => {
  document.body.style.setProperty('--x', cursor.clientX + 'px')
  document.body.style.setProperty('--y', cursor.clientY + 'px')
})



