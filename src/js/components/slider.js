export default function Slider({element}) {
  const slides = element.querySelectorAll('.slider__item');
  let activeIndicator = element.querySelector('.slider__indicator--active');
  let currentSlide = element.querySelector('.slider__item--current');

  element.addEventListener('click', onClick);

  return {
    destroy() {
      element.removeEventListener('click', onClick);
    }
  };

  function onClick(event) {
    if (!event.target.closest('.slider__indicator')) return;
    if (event.target.classList.contains('slider__indicator--active')) return;
    activateIndicator(event.target);
    switchSlide(event.target.getAttribute('data-slide-index'));
  }

  function activateIndicator(indicator) {
    activeIndicator.classList.remove('slider__indicator--active');
    activeIndicator = indicator;
    activeIndicator.classList.add('slider__indicator--active');
  }

  function switchSlide(slideIndex) {
    currentSlide.classList.remove('slider__item--current');
    currentSlide = slides[slideIndex];
    currentSlide.classList.add('slider__item--current');
  }
}