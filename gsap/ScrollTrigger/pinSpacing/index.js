gsap.registerPlugin(ScrollTrigger)

// ScrollTrigger.create({
//     trigger: '.row2',
//     markers: true,
//     start: 'top 20%',
//     end: '+=1000 20%',
//     pin: true,
//     pinSpacing: true
// })

gsap.fromTo('.box', {
    zIndex:5,
}, {
    zIndex:5,
    scrollTrigger: {
        trigger: '.row2',
        // markers: true,
        start: 'top 20%',
        end: '+=1000 20%',
        pin: true,
        pinSpacing: true,
        scrub: 2
    }
})

// gsap.fromTo('.box2', {
//     zIndex:0,
// }, {
//     zIndex:0,
//     scrollTrigger: {
//         trigger: '.row3',
//         markers: true,
//         start: 'top 20%',
//         end: '+=1000 20%',
//         pin: true,
//         pinSpacing: true,
//         scrub: 2
//     }
// })

const buttonStop = document.querySelector('.stop')
const buttonRun = document.querySelector('.run')

buttonStop.addEventListener('click', () => {
    console.log('estoy en stop')
    document.body.style.overflow = 'hidden'
})

buttonRun.addEventListener('click', () => {
    console.log('estoy en run')
    document.body.style.overflow = ''
})