let allSongsArr = {};
/////////////////////
//XMR declarations //
/////////////////////
let getSongData = new XMLHttpRequest();
//XMR Handlers
function dataRequestFail() {
	console.log('An error occured while transferrring the data');
}
function parseSongData() {
	allSongsArr = JSON.parse(event.target.responseText).music;
	outputSongs(allSongsArr);
}
/////////////////////
//DOM Modification //
/////////////////////

//Write each song in array
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
//Clear Songs List (run before new output)
function clearListSongsDOM() {
	let songList = document.getElementById("songList");
	while( songList.hasChildNodes() ) {
		songList.removeChild(songList.lastChild);
	}
}

function removeUserAddNotification() {
	if(document.getElementById("addNotification") !== null) {
		let addNotification = document.getElementById("addNotification");
		addNotification.parentNode.removeChild(addNotification.parentNode.lastChild);
	}
}

function userAddNotification(newSong) {
		removeUserAddNotification();
		let addButton = document.getElementById("submitSongAdd");
		let addNotification = document.createElement("p");
		addNotification.setAttribute("id", "addNotification");
		addNotification.innerHTML = `<span class="title">${newSong.title}&nbsp;</span>by
								<span class="artist">${newSong.artist}&nbsp;</span>
								from&nbsp;<span class="album">${newSong.album}&nbsp;</span> was added.`;
		addButton.parentNode.appendChild(addNotification);
}


/////////////////////////////
//EVENT Listeners/Handlers //
/////////////////////////////

//DOM - NAVIGATION
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
	clearListSongsDOM();
	removeUserAddNotification();
	outputSongs(allSongsArr);
	showOnlyWrapper("viewMusicWrapper");
})
///////////////
//DOM - DATA //
///////////////

//add new songs from user
let addSongForm = document.getElementById("addSongForm");
addSongForm.addEventListener("submit", function() {
	//make new song object from user and push to array
	let songObject = {}
	songObject.title = document.getElementById("titleEntry").value;
	songObject.artist = document.getElementById("artistEntry").value;
	songObject.album = document.getElementById("albumEntry").value;
	allSongsArr.push(songObject);
	//notify user of success
	userAddNotification(songObject);

})
//////////////////
//XMR Execution //
//////////////////
//set up event listeners for completed request and aborted request
getSongData.addEventListener("load", parseSongData);
getSongData.addEventListener("error", dataRequestFail);
//tell it which http ver to use
getSongData.open("GET", "music.json");
getSongData.send();






