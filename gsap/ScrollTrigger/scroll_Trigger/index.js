gsap.registerPlugin(ScrollTrigger)

const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')

ScrollTrigger.create({
    trigger: '.box1',
    markers: true,
    start: 'top center',
    end: '+=100 center',
    pin: '#containerBox',
    onLeave: () => {
        console.log('ya salí')
        ScrollTrigger.refresh()
    }
})

ScrollTrigger.create({
    trigger: '.box2',
    markers: true,
    start: 'top center',
    end: '+=200 center',
    pin: '#containerBox'
})