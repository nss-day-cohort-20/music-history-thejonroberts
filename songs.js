//Put xmr into variable
let getSongData = new XMLHttpRequest();

function dataRequestFail() {
	console.log('An error occured while transferrring the data');
}

function parseSongData() {
	console.log('getSongData', getSongData);  //these two lines are the same.  myRequest is the event.target
	console.log('event.target', event.target);
	var data = JSON.parse(event.target.responseText);  //parse the returned info into js object
	console.log('data', data);
	outputSongs(data.song);
}

//set up event listeners for compeeted request and aborted request
getSongData.addEventListener("load", parseSongData);
getSongData.addEventListener("error", dataRequestFail);

//GET, POST, PUT, DELETE, PATCH - main methods (http verb) for xmr
//tell it which http ver to use
getSongData.open("GET", "music.json");
//go get it, boy!
getSongData.send();

function outputSongs(songsArray) {
	let songList = document.getElementById("songList");
	songsArray.forEach(function(song) {
		songList.innerHTML += `<h2>${song.title}</h2><p>by ${song.artist} from the album ${song.album}</p>`;
	});
}
//loop through songs array to put songs list into html:
for (var i = 0; i < songs.length; i++) {
	//write songs to DOM:
	songList.innerHTML += `<li><h1>${songs[i]}</p></li>`;
}
// console.log(songs);
// console.log(songList);