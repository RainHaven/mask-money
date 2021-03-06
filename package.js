Package.describe({
  name: 'rainhaven:mask-money',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'jQuery Mask Money for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/RainHaven/mask-money',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('lib/mask-money.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rainhaven:mask-money');
  api.addFiles('rainhaven:mask-money-tests.js');
});
