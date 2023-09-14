
const audio = document.querySelector('.audio')
const playButtom = document.querySelector('.play')
const pauseButtom = document.querySelector('.pause')
const stopButtom = document.querySelector('.stop')

playButtom.addEventListener('click', () => {
    audio.play()
})

pauseButtom.addEventListener('click', () => {
    audio.pause()
})

stopButtom.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
})