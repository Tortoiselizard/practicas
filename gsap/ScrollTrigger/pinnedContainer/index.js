gsap.registerPlugin(ScrollTrigger)

const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')

ScrollTrigger.create({
    trigger: '.box1',
    markers: true,
    start: 'top center',
    end: '+=100 center',
    pin: '#containerBox'
})

ScrollTrigger.create({
    trigger: '.box2',
    markers: true,
    start: 'top center',
    end: '+=200 center',
    pin: '#containerBox',
    pinnedContainer: '#containerBox'
})

// ScrollTrigger.create({
//     trigger: '#containerBox',
//     markers: true,
//     start: '50 center',
//     end: '+=700 center',
//     pin: '.box3',
//     pinnedContainer: '#containerBox'
// })