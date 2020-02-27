// militanthistory.js -- typography enhancements for Militant History
// Copyright (C) 2020 Jack Willis

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

document.addEventListener('DOMContentLoaded', function() {
  // TODO: check individual weights, styles
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
    textBalancer.initialize('h2, h3, h4, h5, h6, .subtitle, figcaption');
  });
});