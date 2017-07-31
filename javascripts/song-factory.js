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
	module.exports.storedSongs.push(songFormObj);
};

module.exports.removeSong = (index) => {
	module.exports.storedSongs.splice(index, 1);
};

