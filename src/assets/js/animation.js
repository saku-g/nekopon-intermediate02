import { SetObserver } from './libs/setObserver';

export function animation() {
  const addClass = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-animated');
        observer.unobserve(entry.target);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: '0% 0% -10% 0%',
    threshold: 0.25,
  };

  new SetObserver('.c-anime', addClass, options);
}
