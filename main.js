require('es6-promise').polyfill();
const originalFetch = require('isomorphic-fetch');
const fetch = require('fetch-retry')(originalFetch)

global.window.fetch = fetch;



