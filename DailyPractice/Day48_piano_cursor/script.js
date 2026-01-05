let cursorNo = document.querySelector('.cursor-no')
let cursorYes = document.querySelector('.cursor-yes')
let body = document.querySelector("body")
let main = document.querySelector('main')
let piano = document.querySelector('.piano')

let volumeSlider = document.querySelector('#volume-slider')
console.log(volumeSlider.value)
function updateVolumeColor(value) {
    const percent = value * 100;
    volumeSlider.style.background = `
    linear-gradient(to right, 
    #b8b8b8 ${percent}% ,
    #333 ${percent}%)`;
}

updateVolumeColor(volumeSlider.value);

volumeSlider.addEventListener('input', (e) => {
    updateVolumeColor(e.target.value);
})

const keyMap = {
    'a': { 'key': 'a', 'sound': 'C4.mp3' },
    'w': { 'key': 'w', 'sound': 'Db4.mp3' },
    's': { 'key': 's', 'sound': 'D4.mp3 ' },
    'e': { 'key': 'e', 'sound': 'Eb4.mp3' },
    'd': { 'key': 'd', 'sound': 'E4.mp3' },
    'f': { 'key': 'f', 'sound': 'F4.mp3' },
    't': { 'key': 't', 'sound': 'Gb4.mp3' },
    'g': { 'key': 'g', 'sound': 'G4.mp3' },
    'y': { 'key': 'y', 'sound': 'Ab4.mp3' },
    'h': { 'key': 'h', 'sound': 'A4.mp3' },
    'u': { 'key': 'u', 'sound': 'Bb4.mp3' },
    'j': { 'key': 'j', 'sound': 'B4.mp3' },
    'k': { 'key': 'k', 'sound': 'C5.mp3' }
}

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase()
    if (keyMap[key]) {
        console.log(keyMap[key])
        const audio = new Audio(`./piano-mp3/` + keyMap[key].sound)
        audio.play()
        const keyEl = document.querySelector(`.keys[data-key="${key}"]`);
        if (keyEl) {
          keyEl.classList.add('active');
          setTimeout(() => keyEl.classList.remove('active'), 150);
        }
    }


})

let keys = document.querySelectorAll('.keys')
console.log(keys)
keys.forEach(key => {
    key.addEventListener('click', () => {
        const sound = key.dataset.sound;
        const audio = new Audio(`./piano-mp3/` + sound)
        audio.play()
    })
})

