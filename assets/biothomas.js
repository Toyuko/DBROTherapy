/**
 * BIOTHOMAS theme interactions — benefits tabs, recently viewed products.
 */
(function () {
  function initBenefitsTabs(root) {
    const tabs = root.querySelectorAll('[data-bt-benefit-tab]');
    const panels = root.querySelectorAll('[data-bt-benefit-panel]');
    if (!tabs.length || !panels.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const id = tab.getAttribute('data-bt-benefit-tab');
        tabs.forEach((t) => t.setAttribute('aria-selected', t === tab ? 'true' : 'false'));
        panels.forEach((panel) => {
          panel.classList.toggle('is-active', panel.getAttribute('data-bt-benefit-panel') === id);
        });
      });
    });
  }

  function trackRecentlyViewed() {
    const node = document.querySelector('[data-bt-product-id]');
    if (!node) return;
    const id = node.getAttribute('data-bt-product-id');
    if (!id) return;

    const key = 'biothomas_recently_viewed';
    let ids = [];
    try {
      ids = JSON.parse(localStorage.getItem(key) || '[]');
    } catch (e) {
      ids = [];
    }
    ids = ids.filter((x) => String(x) !== String(id));
    ids.unshift(id);
    ids = ids.slice(0, 8);
    localStorage.setItem(key, JSON.stringify(ids));
  }

  function renderRecentlyViewed() {
    const root = document.querySelector('[data-bt-recently-viewed]');
    if (!root) return;

    let ids = [];
    try {
      ids = JSON.parse(localStorage.getItem('biothomas_recently_viewed') || '[]');
    } catch (e) {
      ids = [];
    }

    const current = root.getAttribute('data-bt-current-product');
    ids = ids.filter((id) => String(id) !== String(current)).slice(0, 4);
    if (!ids.length) {
      root.hidden = true;
      return;
    }

    const endpoint = root.getAttribute('data-bt-recommendations-url');
    if (!endpoint) {
      root.hidden = true;
      return;
    }

    // Use Shopify product recommendations as a fallback visual; IDs are kept for future section Ajax.
    root.hidden = false;
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-bt-benefits]').forEach(initBenefitsTabs);
    trackRecentlyViewed();
    renderRecentlyViewed();
  });
})();
