console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = []; // Initialized as an empty array

function addToCollection(collection, title, artist, yearPublished){
  
  let newAlbum = { // Building new album with inputs provided
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

  collection.push(newAlbum); // Adding new album to collection

  return newAlbum; // Returns newAlbum
}

// Testing by adding my 6 favorite albums in high school

console.log(addToCollection(
  myCollection,
  "Sublime",
  "Sublime",
  1996
  ));
console.log(addToCollection(
  myCollection,
  "All Understood",
  "Jay Buchanan",
  2003
  ));
console.log(addToCollection(
  myCollection,
  "Stop Making Sense",
  "Talking Heads",
  1984
  ));
console.log(addToCollection(
  myCollection,
  "Inflammable Material",
  "Stiff Little Fingers",
  1979
  ));
console.log(addToCollection(
  myCollection,
  "Double Nickels on the Dime",
  "Minutemen",
  1984
  ));
console.log(addToCollection(
  myCollection,
  "London Calling",
  "The Clash",
  1979
  ));

console.log(myCollection); // logging the appended myCollection array

function showCollection(collection){ // Logs all the albums to the console in a given array
  for (let album of collection){
    console.log(`${album.title} by ${album.artist} released in ${album.yearPublished}`);
  }
}

showCollection(myCollection); // Testing using myCollection

function findByArtist(collection, artist){ // Returns array of albums in collection with that given artist
  let artistAlbums = [];
  for (let album of collection){
    if (album.artist == artist){
      artistAlbums.push(album);
    }
  }
  return artistAlbums;
}

console.log(findByArtist(myCollection,"Minutemen"));
// Should return an album (object) by Minutemen
console.log(findByArtist(myCollection,"Nickelback"))
// Should return an empty array since Nickelback is not in my collection










// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
