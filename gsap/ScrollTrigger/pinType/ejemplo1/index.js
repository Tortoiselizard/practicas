gsap.registerPlugin(ScrollTrigger)

gsap.to(".intro", {
    scrollTrigger: {
      trigger: ".pin",
      start: "top top",
      end: () => "+=" + window.innerHeight,
      pin: true,
      markers: true,
      id: "intro",
    }
  });
  
  gsap.to(".box", {
    rotation: 360,
    scrollTrigger: {
      trigger: ".pin-animate",
      start: "top top",
      end: "+=800",
      scrub: 0.5,
      pin: ".pin-animate",
      pinType: "transform",
      pinnedContainer: ".pin",
      markers: true
    }
  });