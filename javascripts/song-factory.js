'use strict';

let $ = require('jquery');
let fbURL = "https://music-history-a22eb.firebaseio.com/";
let firebase = require('./fb-config');

//store songs in array (not using actual DB yet!)
module.exports.storedSongs = [];

module.exports.getSongs = () => {
  return new Promise( ( resolve, reject) => {
		 $.ajax({
			url: `${fbURL}music.json`
			})
			.done( function(songData) {
				// for (var i = 0; i < songData.length; i++) {
				// 	module.exports.storedSongs.push(songData[i]);
				// }
				resolve(songData);
			})
			.fail(function(error) {
				console.log('!', error.responseText);
				reject(error);
			});
	});
};

//add/remove songs objects to storage array
module.exports.addSong = (songFormObj) => {
	return new Promise( (resolve, reject) => {
		let currentUser = firebase.auth().currentUser.uid;
		songFormObj.uid = currentUser;
		$.ajax({
			url: `${fbURL}/music.json`,
			type: "POST",
			data: JSON.stringify(songFormObj),
			dataType: "json"
		}).done( (data) => {
			resolve(data);
		});
	});
};

module.exports.removeSong = (movieId) => {
	if (movieId) {
		return new Promise( (resolve, reject) => {
			$.ajax({
				url: `${fbURL}/movies/${movieId}.json`,
				type: "DELETE"
			}).done( (data) => {
				resolve (data);
			});
		});
	} else {
		console.log("delete failed no id");
	}
};

