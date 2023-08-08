gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.to(
  "#page1 h1",
  {
    scrollTrigger: {
      trigger: "#page1 h1",
      scroller: "body",
      scrub: 2,
      start: "top 30%",
    },
    y: -500,
    opacity: 0,
  },
  1
);

tl.to(
  "#page1 p",
  {
    scrollTrigger: {
      trigger: "#page1 h1",
      scroller: "body",
      scrub: 2,
      start: "top 30%",
    },
    y: -500,
    opacity: 1,
  },
  1
);

tl.to(
  "#page1",
  {
    scrollTrigger: {
      trigger: "#page1",
      scroller: "body",
      duration: 0.5,
      scrub: 2,
      // pin: true,
    },
    backgroundColor: "#FFD300",
  },
  1
);

tl.to(
  "#page2 #box2",
  {
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      duration: 1,
      scrub: 2,
      markers: true,
      start: "top 80%",
    },
    y: -400,
    opacity: 1,
    backgroundColor: "#FFD300",
  },
  2
);
