// militanthistory.js

// <html> gains .wf-active class once small caps font loads
WebFont.load({ custom: { families: ['Alegreya Sans SC'] } });

// custom behavior
document.addEventListener('DOMContentLoaded', function() {

  // Allow users to click anywhere inside a `.breadcrumb li` / "crumb", not just within the `a`.
  var crumbs = document.querySelectorAll('.breadcrumb li');
  for (var i = 0; i < crumbs.length; i++) {
    var crumb = crumbs[i];
    var link = crumb.getElementsByTagName('a')[0];
    crumb.addEventListener('click', link.click.bind(link));
  }

  // JS-only styles
  var breadcrumbRule = '.breadcrumb li:hover { cursor: pointer; }';

  var style = document.createElement('style');
  style.innerText = breadcrumbRule;
  document.head.appendChild(style);
});