'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (evt) {
  evt.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const btnScroll = document.querySelector(".btn--scroll-to")
    btnScroll.addEventListener("click", function () {
 document.getElementById("section--1").scrollIntoView({behavior: "smooth"})})


document.querySelector(".nav__links").addEventListener("click", function (evt) {
    evt.preventDefault()
    if (evt.target.classList.contains("nav__link")) {
        const id = evt.target.getAttribute("href")
        document.querySelector(id).scrollIntoView({behavior:"smooth"})
    }
})
//tabbed component
const tabs = document.querySelectorAll(".operations__tab")
const tabContainer = document.querySelector(".operations__tab-container")
const tabsContent = document.querySelectorAll(".operations__content")

tabContainer.addEventListener("click", function (evt) {
    const clicked = evt.target.closest(".operations__tab")
    // guard clause
    if (!clicked) return
    tabs.forEach(t => t.classList.remove("operations__tab--active"))
    tabsContent.forEach(c => c.classList.remove("operations__content--active"))

    clicked.classList.add("operations__tab--active")
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active")
})


const nav = document.querySelector(".nav")
const handleHover = function (evt) {
    if (evt.target.classList.contains("nav__link")) {
        const siblings = evt.target.closest(".nav").querySelectorAll(".nav__link")
        const logo = evt.target.closest(".nav").querySelector("img")

        siblings.forEach(e => {
            if (e !== evt.target) {
                e.style.opacity = this
            }
        })
        logo.style.opacity = this
    }
}
nav.addEventListener("mouseover", handleHover.bind(0.5))
nav.addEventListener("mouseout", handleHover.bind(1))

const obsCallback = function (entries) {
    const [entry] = entries
    if (!entry.isIntersecting) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }

}
const navHeight = nav.getBoundingClientRect().height
const headerOberserver = new IntersectionObserver(obsCallback, {root: null, threshold: 0, rootMargin: `-${navHeight}px`})
headerOberserver.observe(document.querySelector(".header"))

const allSections = document.querySelectorAll(".section")
const revealSection = function (entries, observer) {
    const [entry] = entries
    if (!entry.isIntersecting) return
    entry.target.classList.remove("section--hidden")
    observer.unobserve(entry.target)
}
const sectionObserver =  new IntersectionObserver(revealSection, {root: null, threshold: 0.15})
allSections.forEach(sec => {
    sectionObserver.observe(sec)
    sec.classList.add("section--hidden")
})

//lazy loading
const imgTargets = document.querySelectorAll("img[data-src]")
const loadImg = function (entries, observer) {
const [entry] = entries
    if (!entry.isIntersecting) return
    entry.target.src = entry.target.dataset.src
    entry.target.addEventListener("load", () => entry.target.classList.remove("lazy-img"))
    observer.unobserve(entry.target)
}
const imgOberserver = new IntersectionObserver(loadImg, {root: null, threshold: 0, rootMargin: "200px"})
imgTargets.forEach(img => imgOberserver.observe(img))