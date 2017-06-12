// // Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Use JavaScript to create a list of songs in the index.html file for your Music History project. Download the songs.js file, which contains an array of strings with song information.

// Add one song to the beginning and the end of the array.
// Loop over the array, and remove any words or characters that obviously don't belong.
// Find and replace the > character in each item with a - character.
// Add each string to the DOM in index.html in the main content area.
// Example output:

// {Song name} by {Artist} on the album {Album}

// {Song name} by {Artist} on the album {Album}

// ...
// ----=========------end of requirements

//Declare array songs - from given file
var songs = [];

// console.log(songs);



//Declare DOM html element for song list:
var songList = document.getElementById("songs");
// console.log(songList);
// console.log(songs);

//loop through songs array to put songs list into html:
for (var i = 0; i < songs.length; i++) {
	//write songs to DOM:
	songList.innerHTML += `<li><h1>${songs[i]}</p></li>`;
}
// console.log(songs);
// console.log(songList);