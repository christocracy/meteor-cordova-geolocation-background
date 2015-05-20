Package.describe({
  summary: "Cordova enabled background geolocation, even when closed/suspended",
  version: "0.0.94",
  name: "christocracy:cordova-background-geolocation",
  git: "https://github.com/christocracy/meteor-cordova-geolocation-background"
});

Cordova.depends({
  // http://plugins.cordova.io/#/package/com.romainstrock.cordova.background-geolocation
  'com.transistorsoft.cordova.background-geolocation':'git@github.com:christocracy/cordova-background-geolocation/tarball/6bef7fed7cdf4083a795cf8fd7b89cbbadf12d52'
  'org.apache.cordova.geolocation': '0.3.12',
  'org.apache.cordova.device': '0.2.11'
});




Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use('underscore', 'client');
  api.use('http', 'client');
  api.export('GeolocationBG', 'client');
  api.addFiles('cordova-geolocation-background.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('christocracy:cordova-background-geolocation');
  api.addFiles('cordova-geolocation-background-tests.js', 'client');
});
