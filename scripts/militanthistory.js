// militanthistory.js

// <html> gains .wf-active class once small caps font loads
WebFont.load({ custom: { families: ['Alegreya Sans SC'] } });

// custom behavior
document.addEventListener('DOMContentLoaded', function() {

  // Treat elements with a [data-href] attribute like links.
  var pseudoLinks = document.querySelectorAll('[data-href]');
  for (var i = 0; i < pseudoLinks.length; i++) {
    var pseudoLink = pseudoLinks[i];
    pseudoLink.addEventListener('click', function() {
      this.setAttribute('tabindex', -1); // allows the element to be focused
      this.focus();
      
      window.location.assign(this.dataset.href);
    });
  }

  // Style pseudo-links like links on hover
  var style = document.createElement('style');
  style.innerText = '[data-href]:hover { cursor: pointer; }';
  document.head.appendChild(style);
});