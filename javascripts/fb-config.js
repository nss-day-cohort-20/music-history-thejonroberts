'use strict';

let firebase = require("firebase/app");
let fbData = require('./values/fb-settings')(); //self invoke as it returns an unknown function

//make fbData - so that we dont push up our api keys to github and make it publicly available

require('firebase/auth');

let config = {
	apiKey: fbData.key,
	authDomain: fbData.authDomain
};

firebase.initializeApp(config);

module.exports = firebase;
