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