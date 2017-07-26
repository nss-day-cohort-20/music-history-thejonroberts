'use strict';

let $ = require('jquery');

module.exports.filterArtist = (selectedArtist) => {
	let $songList = $('.songListItem');
	//Check for "All" selection, show all songs if true
	if( selectedArtist === "All") {
		$songList.show();
	} else { // if artist selected, hide all songs, show songs with matching artist
		$songList.hide();
		$songList.each( (index) => {
			// get text of artist span in DOM, compare to argument
			if ( $( $songList[index] ).children('.artistSpan').text() === selectedArtist) {
				$( $songList[index] ).show();
			}
		});
	}
	//TODO - reset album select
};

module.exports.filterAlbum = (selectedAlbum) => {
	let $songList = $('.songListItem');
	//Check for "All" selection, show all songs if true
	if( selectedAlbum === "All") {
		$songList.show();
	} else { // if album selected, hide all songs, show songs with matching album
		let $songList = $('.songListItem');
		$songList.hide();
		$songList.each( (index) => {
			// get text of album span in DOM, compare to argument
			if ( $( $songList[index] ).children('.albumSpan').text() === selectedAlbum) {
				$( $songList[index] ).show();
			}
		});
	}
	//TODO - reset artist select
};
