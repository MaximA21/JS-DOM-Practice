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



