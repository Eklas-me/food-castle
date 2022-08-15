// mobile nav open or hide
const navButton = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

navButton.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

//navbar sticky events
const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHero);


// dark mode
const darkMode = document.getElementById('darkMode');
const darkLogo = document.getElementById('dark-logo');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
});

checkbox.addEventListener('change', ()=>{
  darkLogo.innerHTML = `<span>Food</span>`;
});
console.log(darkLogo);