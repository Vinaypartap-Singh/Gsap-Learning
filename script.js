gsap.registerPlugin(ScrollTrigger);
// (function loco() {
//   let locoScroll;
//   locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#wrapper"),
//     smooth: true,
//     smartphone: {
//       smooth: true,
//     },
//   });
//   new ResizeObserver(() => locoScroll.update()).observe(
//     document.querySelector("#wrapper")
//   );

//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy("#wrapper", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     pinType: document.querySelector("#wrapper").style.transform
//       ? "transform"
//       : "fixed",
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
// })();

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
      pin: true,
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
