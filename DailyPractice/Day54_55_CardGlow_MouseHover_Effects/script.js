const effectChangeBtn = document.querySelector('.effect-change-btn')
const navBar = document.querySelector('nav')
const GlowBox = document.querySelector('.box')
effectChangeBtn.addEventListener('click', () => {
    GlowBox.classList.toggle('inactive');
    if (GlowBox.classList.contains('inactive')) {
        navBar.classList.add('active')
    } else {
        navBar.classList.remove('active')
    }
})
