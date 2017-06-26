//Put xmr into variable
let getSongData = new XMLHttpRequest();
//XMR Handlers
function dataRequestFail() {
	console.log('An error occured while transferrring the data');
}
function parseSongData() {
	var data = JSON.parse(event.target.responseText);  //parse the returned info into js object
	// console.log('data', data);
	outputSongs(data.song);
}

// function outputSongs(songsArray) {
// 	let songList = document.getElementById("songList");
// //Write each song in array to DOM
function outputSongs(songsArray) {
	let songList = document.getElementById("songList");
	songsArray.forEach(function(song) {
		let listItem = document.createElement("li");
		listItem.setAttribute("class", "songListItem");
		listItem.innerHTML += `<button class="hideButton"> - </button>
								<span class="title">${song.title}&nbsp;</span>
								<span class="artist">${song.artist}&nbsp;</span>
								from&nbsp;
								<span class="album">${song.album}</span>`;
		songList.appendChild(listItem);
	});
}

let hideButtons = document.getElementsByClassName("hideButton");
console.log('hideButtons', hideButtons);
let songListIem = document.getElementsByClassName("songListItem");

function addHideClass(i) {
		console.log('classhide', songListIem[i]);
	};

for (var i = 0; i < hideButtons.length; i++) {
	hideButtons[i].addEventListener("click", addHideClass);
	console.log('buttons added?');
}

//set up event listeners for completed request and aborted request
getSongData.addEventListener("load", parseSongData);
getSongData.addEventListener("error", dataRequestFail);

//tell it which http ver to use
getSongData.open("GET", "music.json");
getSongData.send();






