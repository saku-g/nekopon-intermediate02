export function tab() {
  const tabs = document.querySelectorAll('.js-tab');

  /**
   * パネルを表示する関数
   * @param {Element} button - クリックされたボタン
   */
  const panelActive = (button) => {
    // 対象のタブパネルIDからタブパネルを表示
    const targetPanelId = button.getAttribute('aria-controls');
    console.log(targetPanelId);
    document.querySelector(`#${targetPanelId}`).classList.add('is-show');
  };

  /**
   * すべてのボタンとパネルをリセットする関数
   * @param {NodeList} buttons - タブボタンのリスト
   * @param {NodeList} panels - タブパネルのリスト
   */
  const resetTab = (buttons, panels) => {
    buttons.forEach((button) => {
      button.setAttribute('aria-selected', 'false');
    });
    panels.forEach((panel) => {
      panel.classList.remove('is-show');
    });
  };

  tabs.forEach((tab) => {
    /**
     * 選択中のタブを表示
     * -------------------- */
    // 選択中のボタンを取得
    const selectedButton = tab.querySelector('button[aria-selected="true"]');
    panelActive(selectedButton);

    /**
     * イベント
     * -------------------- */
    const tabButtons = tab.querySelectorAll('button[role="tab"]');
    const tabPanels = tab.querySelectorAll('[role="tabpanel"]');

    tabButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        resetTab(tabButtons, tabPanels);

        e.currentTarget.setAttribute('aria-selected', 'true');
        panelActive(e.currentTarget);
      });
    });
  });
}
