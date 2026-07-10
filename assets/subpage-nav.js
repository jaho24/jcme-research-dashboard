/* 子页面统一顶部平台导航 */
(function (global) {
  var PAGES = [
    { id: 'home', label: '首页', href: '../index.html' },
    { id: 'trend', label: '行业趋势', href: '行业趋势.html' },
    { id: 'compete', label: '竞争分析', href: '竞争分析看板_v4.5.html' },
    { id: 'report', label: '主题报告', href: '主题报告看板v5.2.html' },
    { id: 'observe', label: '工业观察', href: '工业观察看板.html' }
  ];

  function renderPlatformNav(activeId) {
    var links = PAGES.map(function (p) {
      var cls = p.id === activeId ? ' class="active"' : '';
      return '<a href="' + p.href + '"' + cls + '>' + p.label + '</a>';
    }).join('');

    return (
      '<header class="platform-top">' +
      '<div class="platform-brand">' +
      '<div class="platform-brand-logos">' +
      '<span class="platform-brand-logo">京城机电</span>' +
      '<span class="platform-brand-logo sub">京城创新</span>' +
      '</div></div>' +
      '<nav class="platform-nav" aria-label="平台导航">' +
      links +
      '</nav></header>'
    );
  }

  function mountPlatformNav(activeId, mountId) {
    var el = document.getElementById(mountId || 'platform-nav-mount');
    if (!el) return;
    el.innerHTML = renderPlatformNav(activeId);
  }

  global.PLATFORM_NAV_PAGES = PAGES;
  global.renderPlatformNav = renderPlatformNav;
  global.mountPlatformNav = mountPlatformNav;

  document.addEventListener('DOMContentLoaded', function () {
    var auto = document.getElementById('platform-nav-mount');
    if (auto && auto.dataset.active) {
      mountPlatformNav(auto.dataset.active);
    }
  });
})(window);
