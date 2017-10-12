'use strict';

let $ = require('jquery');
let firebase = require('./fb-config');

let provider = new firebase.auth.GoogleAuthProvider();
let viewController = require('./view-controller.js');
let factory = require('./song-factory.js');
let songController = require('./song-controller.js');

let logInGoogle = () => {
	console.log("hallo auth");
	return firebase.auth().signInWithPopup(provider);
};

let getUserId = () => {

};

let logOut = () => {
	return firebase.auth().signOut();
};

$("#loginAnchor").click( () => {
	console.log("loginAnchor clicked");
	// $('').toggleClass('isHidden');
	// $('#unauth-btn').toggleClass('isHidden');
	logInGoogle()
	.then( (result) => {
		console.log('result', result);
		let user = result.user.uid;
		console.log('user', user);
		factory.getSongs()
		.then( () => {
			songController.songsToDOM();
			viewController.loadSongListView();
		});
			}).catch( (err) => {
		console.log('error signing in', err);
	});
});

// on click on logout button. make sure it has isHidden class.
$("#logoutAnchor").click( () => {
	console.log('unauth-btn clicked');
	logOut()
	.then( (result) => {
		console.log('Successfully signed out');
		location.reload();
	})
	.catch( (err) => {
		console.log('error signing you out', err);
	});
});
