// militanthistory.js

document.addEventListener('DOMContentLoaded', function() {
  var bodyTextFont = new FontFaceObserver('Alegreya Sans');
  var smallCapsFont = new FontFaceObserver('Alegreya Sans SC');
  var displayFont = new FontFaceObserver('Titillium Web');

  smallCapsFont.load().then(function() {
    document.body.classList.add('small-caps-font-loaded');
  });

  var allFonts = Promise.race([
    bodyTextFont.load(),
    smallCapsFont.load(),
    displayFont.load()
  ]);

  allFonts.then(function() {
    textBalancer.initialize('h2, h3, h4, .lead, .subtitle, td');
  });
});