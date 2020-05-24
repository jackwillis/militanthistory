// militanthistory.js -- typography enhancements for Militant History
// Copyright (C) 2020 Jack Willis GPL-3.0+

document.addEventListener('DOMContentLoaded', function() {
  // This is more to just check if fonts load in general without granularity
  var bodyTextFont = new FontFaceObserver('Alegreya Sans');
  var smallCapsFont = new FontFaceObserver('Alegreya Sans SC');
  var displayFont = new FontFaceObserver('Titillium Web');

  smallCapsFont.load().then(function() {
    document.body.classList.add('small-caps-font-loaded');
  });

  var allFonts = Promise.all([
    bodyTextFont.load(),
    smallCapsFont.load(),
    displayFont.load()
  ]);

  allFonts.then(function() {
    balanceText('h2, h3, h4, h5, h6, .subtitle, figcaption', 0.75);
  });
});