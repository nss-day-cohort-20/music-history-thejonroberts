'use strict';

let firebase = require("firebase/app");
let fbData = require('./values/fb-setting.js')();

require('firebase/auth');

let config = {
	apiKey: fbData.key,
	authDomain: fbData.authDomain
	// databaseURL: fbData.databaseURL,
	//  projectId: fbData.projectId,
	//  storageBucket: fbData.storageBucket,
	//  messagingSenderId: fbData.messagingSenderId
};

firebase.initializeApp(config);

module.exports = firebase;
