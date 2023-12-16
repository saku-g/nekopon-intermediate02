import { SetObserver } from './libs/setObserver';

export function changeState() {
  const header = document.querySelector('.js-header'),
    toTop = document.querySelector('.js-toTop'),
    footerImage = document.querySelector('.p-footer__image');

  const toggleClass = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add('is-active');
        toTop.classList.add('is-show');
      } else {
        header.classList.remove('is-active');
        toTop.classList.remove('is-show');
      }
    });
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  new SetObserver('.js-introTitle', toggleClass, options);

  new SetObserver('.p-footer__image', (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        footerImage.classList.add('is-inview');
      }
    });
  });
}
