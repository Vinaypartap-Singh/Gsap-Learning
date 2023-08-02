// gsap.to("#pageBox", {
//   x: 700,
//   duration: 2,
//   delay: 2,
//   backgroundColor: "#900",
//   rotate: 90,
//   scale: 1.5,
// });

// gsap.from("#pageBox", {
//   x: 700,
//   y: 300,
//   duration: 2,
//   delay: 2,
//   backgroundColor: "#900",
//   rotate: 90,
//   scale: 1.5,
// });

// gsap.to("#h1, #h2, #h3", {
//   color: "#ae0000",
//   x: 900,
//   y: 300,
//   duration: 2,
//   stagger: 1,
// });

gsap.to("#page2 h1", {
  scale: 4,
  opacity: 1,
  duration: 1,
  x: -200,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    scrub: 5,
    markers: true,
  },
});
