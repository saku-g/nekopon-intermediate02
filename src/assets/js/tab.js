export function tab() {
  const tabs = document.querySelectorAll('.js-tab');

  tabs.forEach((tab) => {
    /**
     * Init
     ==================== */
    // 選択中のボタンを取得
    const selectedButton = tab.querySelector('button[aria-selected="true"]');

    // 対象のタブパネルID
    const targetPanelId = selectedButton.getAttribute('aria-controls');

    // 対象のタブパネルを表示
    document.querySelector(`#${targetPanelId}`).classList.add('is-show');

    /**
     * Event
     ==================== */
    const tabButtons = tab.querySelectorAll('button[role="tab"]');
    const tabPanels = tab.querySelectorAll('[role="tabpanel"]');

    tabButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        tabButtons.forEach((button) => {
          button.setAttribute('aria-selected', 'false');
        });
        tabPanels.forEach((panel) => {
          panel.classList.remove('is-show');
        });

        e.currentTarget.setAttribute('aria-selected', 'true');

        const targetPanelId = e.currentTarget.getAttribute('aria-controls');

        document.querySelector(`#${targetPanelId}`).classList.add('is-show');
      });
    });
  });
}
