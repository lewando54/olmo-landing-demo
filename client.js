const el = document.querySelector(".header")
const observer = new IntersectionObserver( 
  (e) => {
    document.querySelector('.header--nav').classList.toggle("header--nav__is-pinned", e.intersectionRatio < 1);
    e.target.classList.toggle("header__is-pinned", e.intersectionRatio < 1)
  },
  { threshold: 1 }
);

observer.observe(el);