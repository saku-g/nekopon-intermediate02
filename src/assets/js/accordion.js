export function accordion() {
  const buttons = document.querySelectorAll('.js-accordionButton');

  if (buttons.length) {
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        // buttonのaria-expanded属性を切り替え
        const isExpanded = e.currentTarget.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);

        // 展開する要素にクラスを取り外し
        const body = e.currentTarget.parentNode.nextElementSibling;
        body.classList.toggle('is-open');
      });
    });
  }
}
