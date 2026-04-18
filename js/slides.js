function openModal(id) {
  const overlay = document.getElementById("modal-" + id);
  if (!overlay) return;
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const overlay = document.getElementById("modal-" + id);
  if (!overlay) return;
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.active").forEach((overlay) => {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
});

Reveal.initialize({
  hash: true,
  history: true,
  controls: false,
  progress: true,
  slideNumber: "c/t",
  center: false,
  transition: "fade",
  transitionSpeed: "slow",
  backgroundTransition: "fade",
  width: "100%",
  height: "100%",
  margin: 0,
  minScale: 0.5,
  maxScale: 2.0,
  keyboard: {
    27: null,
  },
  plugins: [],
});

Reveal.on("slidechanged", (event) => {
  const currentSlide = event.currentSlide;
  animateSlide(currentSlide);
});

Reveal.on("ready", (event) => {
  animateSlide(event.currentSlide);
});

function animateSlide(slide) {
  if (!slide || typeof gsap === "undefined") return;

  const tag = slide.querySelector(".tag");
  const h2 = slide.querySelector("h2");
  const catchphrase = slide.querySelector(".catchphrase");
  const accent = slide.querySelector(".slide-accent");
  const diagram = slide.querySelector(".diagram-container");
  const stats = slide.querySelector(".stats-row");
  const btn = slide.querySelector(".btn-more");

  const tl = gsap.timeline();

  if (tag)
    tl.fromTo(
      tag,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
    );
  if (h2)
    tl.fromTo(
      h2,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.2",
    );
  if (accent)
    tl.fromTo(
      accent,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.4, ease: "power2.out", transformOrigin: "left" },
      "-=0.3",
    );
  if (catchphrase)
    tl.fromTo(
      catchphrase,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "-=0.2",
    );
  if (diagram)
    tl.fromTo(
      diagram,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.2",
    );
  if (stats)
    tl.fromTo(
      stats,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power2.out" },
      "-=0.2",
    );
  if (btn)
    tl.fromTo(
      btn,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      "-=0.1",
    );
}

Reveal.on("ready", () => {
  const h1 = document.querySelector(".slide-cover h1");
  const coverTag = document.querySelector(".slide-cover .tag");
  const coverCatch = document.querySelector(".slide-cover .catchphrase");
  const coverBtn = document.querySelector(".slide-cover .btn-more");

  if (!h1) return;
  const tl = gsap.timeline({ delay: 0.3 });
  if (coverTag)
    tl.fromTo(
      coverTag,
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
    );
  tl.fromTo(
    h1,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
    "-=0.2",
  );
  if (coverCatch)
    tl.fromTo(
      coverCatch,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.3",
    );
  if (coverBtn)
    tl.fromTo(
      coverBtn,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "-=0.2",
    );
});
