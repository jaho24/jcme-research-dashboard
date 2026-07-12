/* 全站统一顶部平台导航 */
(function (global) {
  var PAGE_IDS = ['home', 'trend', 'compete', 'report', 'observe'];
  var PAGE_LABELS = {
    home: '首页',
    trend: '行业趋势',
    compete: '竞争分析',
    report: '主题报告',
    observe: '工业观察'
  };
  var PAGE_FILES = {
    home: 'index.html',
    trend: '行业趋势.html',
    compete: '竞争分析看板_v4.5.html',
    report: '主题报告看板v5.2.html',
    observe: '工业观察看板.html'
  };

  function isInPagesFolder() {
    var path = (global.location && global.location.pathname || '').replace(/\\/g, '/');
    return /\/pages\//.test(path) || /\/pages$/i.test(path);
  }

  function resolvePaths() {
    var inPages = isInPagesFolder();
    return {
      inPages: inPages,
      homeHref: inPages ? '../index.html' : 'index.html',
      pagesPrefix: inPages ? '' : 'pages/',
      assetPrefix: inPages ? '../assets/' : 'assets/'
    };
  }

  function pageHref(id, paths) {
    if (id === 'home') return paths.homeHref;
    return paths.pagesPrefix + PAGE_FILES[id];
  }

  function renderPlatformNav(activeId) {
    var paths = resolvePaths();
    var links = PAGE_IDS.map(function (id) {
      var cls = id === activeId ? ' class="active"' : '';
      return '<a href="' + pageHref(id, paths) + '"' + cls + '>' + PAGE_LABELS[id] + '</a>';
    }).join('');

    return (
      '<div class="platform-top">' +
      '<a class="platform-logo" href="' + paths.homeHref + '" aria-label="京城机电首页">' +
      '<img src="' + paths.assetPrefix + 'jcme-logo.png" alt="京城机电">' +
      '</a>' +
      '<nav class="platform-nav" aria-label="平台导航">' + links + '</nav>' +
      '</div>'
    );
  }

  function mountPlatformNav(activeId, mountId) {
    var el = document.getElementById(mountId || 'platform-nav-mount');
    if (!el) return;
    el.innerHTML = renderPlatformNav(activeId);
  }

  global.PLATFORM_NAV_PAGES = PAGE_IDS.map(function (id) {
    return { id: id, label: PAGE_LABELS[id] };
  });
  global.renderPlatformNav = renderPlatformNav;
  global.mountPlatformNav = mountPlatformNav;

  document.addEventListener('DOMContentLoaded', function () {
    var auto = document.getElementById('platform-nav-mount');
    if (auto && auto.dataset.active) {
      mountPlatformNav(auto.dataset.active);
    }
  });
})(window);
