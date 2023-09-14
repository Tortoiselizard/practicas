gsap.registerPlugin(ScrollTrigger)

const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')

ScrollTrigger.create({
    trigger: '.box1',
    markers: true,
    start: '300 center',
    end: '+=200 center',
    pin: '#containerBox'
})

ScrollTrigger.create({
    trigger: '.box4',
    endTrigger: '.container-11',
    markers: true,
    start: 'top center',
    end: 'bottom center',
    pin: true,
    // pinType: 'transform',
    // pinType: 'fixed',
    // pinnedContainer: '#containerBox'
})

// ScrollTrigger.create({
//     trigger: '#containerBox',
//     markers: true,
//     start: '50 center',
//     end: '+=600 center',
//     pin: '.box4',
//     pinType: 'transform',
//     // pinType: 'fixed',
//     pinnedContainer: '#containerBox'
// })