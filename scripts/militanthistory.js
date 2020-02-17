// militanthistory.js

// <html> gains .wf-active class once small caps font loads
WebFont.load({ custom: { families: ['Alegreya Sans SC'] } });

// custom behavior
document.addEventListener('DOMContentLoaded', function() {

  // Allow users to click anywhere inside a `.breadcrumb li`, not just within the `a`.
  var breadcrumbElements = document.querySelectorAll('.breadcrumb li');
  for (var i = 0; i < breadcrumbElements.length; i++) {
    var element = breadcrumbElements[i];
    var link = element.getElementsByTagName('a')[0];

    (function(link) {
      element.addEventListener('click', function() {
        link.click();
      });
    })(link);
  }

  // JS-only styles
  var breadCrumbStyle = '.breadcrumb li:hover { cursor: pointer; }';

  var style = document.createElement('style');
  style.innerText = breadCrumbStyle;
  document.head.appendChild(style);
});