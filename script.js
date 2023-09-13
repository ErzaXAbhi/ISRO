const topRocket = document.querySelector(".top-rocket");
const midRocket = document.querySelector(".mid-rocket");
const rocket = document.querySelector(".bot-rocket");
const supply = document.querySelector(".supply");
const blocs = document.querySelectorAll(".bloc");

const offsets = [105, 206, 687];

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray([".bloc2", ".bloc4", ".bloc5"]).forEach((bloc, index) => {
  gsap.to(bloc, {
    y: 0,
    ease: "linear",
    scrollTrigger: {
      trigger: ".container-scroll",
      start: "top center", // Adjust this to your needs
      end: `+=${offsets[index]}`,
      scrub: true,
    },
  });
});

blocs.forEach((bloc, index) => {
  if (index === 3) {
    ScrollTrigger.create({
      trigger: bloc,
      start: "top+=220 center",
      onEnter: () => {
        bloc.classList.add("active");
      },
      onLeaveBack: () => {
        bloc.classList.remove("active");
      },
    });
  }

  ScrollTrigger.create({
    trigger: bloc,
    start: "top center+=10%",
    onEnter: () => {
      bloc.classList.add("active");
    },
    onLeaveBack: () => {
      bloc.classList.remove("active");
    },
  });
});
