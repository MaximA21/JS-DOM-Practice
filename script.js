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



