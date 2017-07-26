'use strict';

let $ = require('jquery');

module.exports.storedSongs = [];

module.exports.getSongs = () => {
  return new Promise( ( resolve, reject) => {
		 $.ajax({
			url: "../data/music.json"
			})
			.done( function(songData) {
				for (var i = 0; i < songData.music.length; i++) {
					module.exports.storedSongs.push(songData.music[i]);
				}
				resolve(songData);
			})
			.fail(function(error) {
				console.log('!', error.responseText);
				reject(error);
			});
	});
};

module.exports.addSong = (songFormObj) => {
	module.exports.storedSongs.push(songFormObj);
};

