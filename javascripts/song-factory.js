'use strict';

let $ = require('jquery');

module.exports.getSongs = () => {
  return new Promise( ( resolve, reject) => {
		 $.ajax({
			url: "../data/music.json"
			})
			.done( function(songData) {
				resolve(songData);
			})
			.fail(function(error) {
				console.log('!', error.responseText);
				reject(error);
			});
	});
};

