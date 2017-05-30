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



//Declare array songs and add strings to the array
var songs = [];
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// console.log(songs);
//
//Declare DOM html element for song list:
var songList = document.getElementById("songs");
// console.log(songList);
//add song to beginning of array songs
songs.unshift("Capri Pants > by Bikini Kill on the album Reject All American");
//add song to end of array songs
songs.push("I am a Scientist > by Guided by Voices on the album Bee Thousand");
// console.log(songs);

//loop through songs array to put songs list into html:
for (var i = 0; i < songs.length; i++) {
	//remove replace special characters (with proper html tags where needed)
	songs[i] = songs[i].replace(">", "-");
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "a");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace("&", "&amp;");
	songs[i] = songs[i].replace("!", "");
	//write songs to DOM:
	songList.innerHTML += `<p>${songs[i]}</p>`;
}
// console.log(songs);
// console.log(songList);

