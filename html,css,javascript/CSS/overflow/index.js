const container2 = document.querySelector('.container2')
const container3 = document.querySelector('.container3')
const container4 = document.querySelector('.container4')
const buttonQuit = document.querySelector('.scrollQuit')
const buttonGive = document.querySelector('.scrollgive')

container2.scrollTop = 1
container3.scrollTop = 100
container4.scrollTop = 150

buttonQuit.addEventListener('click', () => {
    console.log('entre en quit')
    // container2.style.overflow = 'hidden'
    // console.log('container2:', container2)
    // console.log('posición', container2.scrollTop)
    // container2.addEventListener('scroll', () => {
    //     const currentPosition = container2.scrollTop
    //     console.log('currentPosition:', currentPosition)
    //     container2.scrollTop = container2.scrollTop - container2.scrollTop
    // })
    document.body.style.overflow = 'hidden'
})

buttonGive.addEventListener('click', () => {
    console.log('entre en give')
    // container2.style.overflow = ''
    container2.removeEventListener('scroll', (event) => {})
})