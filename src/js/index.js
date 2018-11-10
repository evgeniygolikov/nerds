import '../scss/main.scss';
import Slider from './components/slider.js';
import Modal from './components/modal.js';

const sliderElement = document.querySelector('.slider');

if (sliderElement) {
  const slider = Slider({
    element: sliderElement
  });
}

const modal = Modal({
  element: document.querySelector('#contact-form-modal')
});

document
  .querySelector('[data-modal-trigger="contact-form-modal"]')
  .addEventListener('click', modal.open);
