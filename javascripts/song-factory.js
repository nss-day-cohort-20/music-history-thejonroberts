'use strict';

let $ = require('jquery');

//store songs in array (not using actual DB yet!)
module.exports.storedSongs = [];

//get songs from data file to store
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

//add/remove songs objects to storage array
module.exports.addSong = (songFormObj) => {
	module.exports.storedSongs.push(songFormObj);
};

module.exports.removeSong = (index) => {
	module.exports.storedSongs.splice(index, 1);
};

