const ESCAPE_KEY = 27;
const TAB_KEY = 9;

export default function Modal({element, onOpen, onClose}) {
  let activeElement = null;

  return {open, close};

  function open() {
    activeElement = document.activeElement;
    element.setAttribute('aria-hidden', 'false');
    element.classList.add('modal--opened');
    focusFirst();
    attachListeners();
    disableScroll();
  }

  function close() {
    element.setAttribute('aria-hidden', 'true');
    element.classList.remove('modal--opened');
    detachListeners();
    enableScroll();
    activeElement.focus();
  }

  function attachListeners() {
    element.addEventListener('touchstart', onClick);
    element.addEventListener('click', onClick);
    element.addEventListener('keydown', onKeyDown);
  }

  function detachListeners() {
    element.removeEventListener('touchstart', onClick);
    element.removeEventListener('click', onClick);
    element.removeEventListener('keydown', onKeyDown);
  }

  function onClick(event) {
    if (event.target.closest('.modal__close') || event.target.matches('.modal')) {
      event.preventDefault();
      close();
    }
  }

  function onKeyDown(event) {
    if (event.keyCode === ESCAPE_KEY) {
      event.preventDefault();
      close();
    } else if (event.keyCode === TAB_KEY) {
      controlFocus(event);
    }
  }

  function controlFocus(event) {
    if (event.target.matches('[data-modal-focusable="first"]') && event.shiftKey) {
      event.preventDefault();
      focusLast();
    }
    if (event.target.matches('[data-modal-focusable="last"]') && !event.shiftKey) {
      event.preventDefault();
      focusFirst();
    }
  }

  function focusFirst() {
    element.querySelector('[data-modal-focusable="first"]').focus();
  }

  function focusLast() {
    element.querySelector('[data-modal-focusable="last"]').focus();
  }
}

function disableScroll() {
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100vh';
}

function enableScroll() {
  document.body.style.overflow = 'initial';
  document.body.style.height = 'initial';
}
