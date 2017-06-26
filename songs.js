let allSongsArr = {};

//Put xmr into variable
let getSongData = new XMLHttpRequest();
//XMR Handlers
function dataRequestFail() {
	console.log('An error occured while transferrring the data');
}
function parseSongData() {
	//parse the returned info into js object
	let data = JSON.parse(event.target.responseText);
	allSongsArr = data.music;
	outputSongs(allSongsArr);
}
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
//shows only page wrapper of id passed to it.
function showOnlyWrapper(id) {
	let allPageWrappers = document.querySelectorAll(".pageWrapper");
	allPageWrappers.forEach( function(div) {
		div.classList.add("hidden")
	});
	let targetedPage = document.getElementById(id);
	targetedPage.classList.remove("hidden");
}
//handlers for link clicks - hide other wrappers, show desired wrapper (css .hidden rules applied/removed)
let addMusicAnchor = document.getElementById("addMusicAnchor");
addMusicAnchor.addEventListener("click", function() {
	showOnlyWrapper("addMusicWrapper");
})
let listMusicAnchor = document.getElementById("listMusicAnchor");
listMusicAnchor.addEventListener("click", function() {
	showOnlyWrapper("viewMusicWrapper");
})
//set up event listeners for completed request and aborted request
getSongData.addEventListener("load", parseSongData);
getSongData.addEventListener("error", dataRequestFail);

//tell it which http ver to use
getSongData.open("GET", "music.json");
getSongData.send();






