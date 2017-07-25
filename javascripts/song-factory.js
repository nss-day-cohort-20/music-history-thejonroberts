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

module.exports.addSong = (songFormObj) => {
  return new Promise ( (resolve, reject) => {
    // let currentUser = firebase.auth().currentUser.uid;
    // songFormObj.uid = currentUser;
    $.ajax({
      url: '../data/music.json',
      type: "POST",
      data: JSON.stringify(songFormObj),
      dataType: "json" //probably unecessary
    }).done( (songId) => {
      resolve(songId);
    });
  });
};

