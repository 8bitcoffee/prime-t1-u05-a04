console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = []; // Initialized as an empty array

function addToCollection(collection, title, artist, yearPublished, tracks){
  
  let newAlbum = { // Building new album with inputs provided
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  };

  collection.push(newAlbum); // Adding new album to collection

  return newAlbum; // Returns newAlbum
}

// Testing by adding my 6 favorite albums in high school
console.log("\n---addToCollection Test---");
console.log(addToCollection(
  myCollection,
  "Sublime",
  "Sublime",
  1996,
  [
    {
      name: "Garden Grove",
      duration: "4:22"
    },
    {
      name: "What I Got",
      duration: "2:51"
    },
    {
      name: "Wrong Way",
      duration: "2:16"
    },
    {
      name: "Same in the End",
      duration: "2:36"
    },
    {
      name: "April 29, 1992 (Miami)",
      duration: "3:53"
    },
    {
      name: "Santeria",
      duration: "3:03"
    },
    {
      name: "Seed",
      duration: "2:10"
    },
    {
      name: "Jailhouse",
      duration: "4:53"
    },
    {
      name: "Pawn Shop",
      duration: "6:06"
    },
    {
      name: "Paddle Out",
      duration: "1:15"
    },
    {
      name: "The Ballad of Johnny Butt",
      duration: "2:11"
    },
    {
      name: "Burritos",
      duration: "3:55"
    },
    {
      name: "Under My Voodoo",
      duration: "3:25"
    },
    {
      name: "Get Ready",
      duration: "4:50"
    },
    {
      name: "Carress Me Down",
      duration: "3:31"
    },
    {
      name: "What I Got (Reprise)",
      duration: "3:01"
    },
    {
      name: "Doin' Time",
      duration: "4:14"
    }
  ]
));

console.log(addToCollection(
  myCollection,
  "All Understood",
  "Jay Buchanan",
  2003,
  [
    {
      name: "Plans",
      duration: "3:33"
    },
    {
      name: "Three Times Coleen",
      duration: "4:22"
    },
    {
      name: "Reborn",
      duration: "3:52"
    },
    {
      name: "Satan Is A Woman",
      duration: "4:29"
    },
    {
      name: "If You Leave",
      duration: "6:21"
    },
    {
      name: "How Crazy I Am",
      duration: "4:55"
    },
    {
      name: "Humility",
      duration: "4:03"
    },
    {
      name: "American Son",
      duration: "4:09"
    },
    {
      name: "The Sun Burns My Eyes",
      duration: "3:25"
    },
    {
      name: "Steal Your Kisses",
      duration: "3:53"
    },
    {
      name: "The Last Thing You Need",
      duration: "4:21"
    },
    {
      name: "On Me",
      duration: "4:23"
    }
  ]
));

console.log(addToCollection(
  myCollection,
  "Remain in the Light",
  "Talking Heads",
  1980,
  [
    {
      name: "Born Under Punches (The Heat Goes On)",
      duration: "5:49"
    },
    {
      name: "Crosseyed and Painless",
      duration: "4:48"
    },
    {
      name: "The Great Curve",
      duration: "6:28"
    },
    {
      name: "Once in a Lifetime",
      duration: "4:19"
    },
    {
      name: "Houses in Motion",
      duration: "4:33"
    },
    {
      name: "Seen and Not Seen",
      duration: "3:25"
    },
    {
      name: "Listening Wind",
      duration: "4:43"
    },
    {
      name: "The Overload",
      duration: "6:01"
    }
  ]
));

console.log(addToCollection(
  myCollection,
  "Inflammable Material",
  "Stiff Little Fingers",
  1979,
  [
    {
      name: "Suspect Device",
      duration: "2:36"
    },
    {
      name: "State of Emergency",
      duration: "2:29"
    },
    {
      name: "Here We Are Nowhere",
      duration: "1:00"
    },
    {
      name: "Wasted Life",
      duration: "3:10"
    },
    {
      name: "No More of That",
      duration: "2:04"
    },
    {
      name: "Barbed Wire Love",
      duration: "3:33"
    },
    {
      name: "White Noise",
      duration: "1:57"
    },
    {
      name: "Breakout",
      duration: "3:04"
    },
    {
      name: "Law and Order",
      duration: "3:14"
    },
    {
      name: "Rough Trade",
      duration: "2:41"
    },
    {
      name: "Johnny Was",
      duration: "8:12"
    },
    {
      name: "Alternative Ulster",
      duration: "2:45"
    },
    {
      name: "Closed Groove",
      duration: "4:25"
    }
  ]
));

// Removed because it is 45 tracks and I don't want to type that

// console.log(addToCollection(
//   myCollection,
//   "Double Nickels on the Dime",
//   "Minutemen",
//   1984,
//   [
//     {
//       name: "",
//       duration: ""
//     }
//   ]
// ));

console.log(addToCollection(
  myCollection,
  "London Calling",
  "The Clash",
  1979,
  [
    {
      name: "London Calling",
      duration: "3:19"
    },
    {
      name: "Brand New Cadillac",
      duration: "2:12"
    },
    {
      name: "Jimmy Jazz",
      duration: "3:52"
    },
    {
      name: "Hateful",
      duration: "2:45"
    },
    {
      name: "Rudie Can't Fail",
      duration: "3:26"
    },
    {
      name: "Spanish Bombs",
      duration: "3:19"
    },
    {
      name: "The Right Profile",
      duration: "3:56"
    },
    {
      name: "Lost in the Supermarket",
      duration: "3:47"
    },
    {
      name: "Clampdown",
      duration: "3:49"
    },
    {
      name: "Guns of Brixton",
      duration: "3:07"
    },
    {
      name: "Wrong 'Em Boyo",
      duration: "3:10"
    },
    {
      name: "Death or Glory",
      duration: "3:55"
    },
    {
      name: "Koka Kola",
      duration: "1:46"
    },
    {
      name: "The Card Cheat",
      duration: "3:51"
    },
    {
      name: "Lover's Rock",
      duration: "4:01"
    },
    {
      name: "Four Horsemen",
      duration: "2:56"
    },
    {
      name: "I'm Not Down",
      duration: "3:00"
    },
    {
      name: "Revolution Rock",
      duration: "5:37"
    },
    {
      name: "Train in Vain",
      duration: "3:09"
    }
  ]
));

console.log(addToCollection(
  myCollection,
  "Chutes too Narrow",
  "The Shins",
  2003,
  [
    {
      name: "Kissing the Lipless",
      duration: "3:19"
    },
    {
      name: "Mine's Not a High Horse",
      duration: "3:20"
    },
    {
      name: "So Says I",
      duration: "2:48"
    },
    {
      name: "Young Pilgrims",
      duration: "2:47"
    },
    {
      name: "Saint Simon",
      duration: "4:25"
    },
    {
      name: "Fighting in a Sack",
      duration: "2:26"
    },
    {
      name: "Pink Bullets",
      duration: "3:53"
    },
    {
      name: "Turn a Square",
      duration: "3:11"
    },
    {
      name: "Gone for Good",
      duration: "3:13"
    },
    {
      name: "Those to Come",
      duration: "4:24"
    }
  ]
))

console.log("myCollection: ",myCollection); // logging the appended myCollection array

function showCollection(collection){ // Logs all the albums to the console in a given array
  
  for (let album of collection){
    let printStr = "";

    printStr += `
      ${album.title} by ${album.artist} published in ${album.yearPublished}
    `;

    for (let i=0; i<album.tracks.length; i++){
      let track = album.tracks[i]; 
      printStr += `
      ${i+1}. ${track.name} : ${track.duration}`;
    }
    console.log(printStr);
  }
}

console.log("\n---showCollection Test");
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

console.log("\n---findByArtist Test---");

console.log(findByArtist(myCollection,"Stiff Little Fingers"));
// Should return an album (object) by Stiff Little Fingers
console.log(findByArtist(myCollection,"Nickelback"))
// Should return an empty array since Nickelback is not in my collection

function search(collection,searchCriteria){
  let searchResults = []; // Return array

  if ("trackName" in searchCriteria){
    for (let album of collection){
      for (let track of album.tracks){
        if (track.name == searchCriteria.trackName){
          searchResults.push(album);
        }
      }
    }
    return searchResults;
  }
  else if (
    searchCriteria == undefined ||
    !"artist" in searchCriteria ||
    !"yearPublished" in searchCriteria ||
    searchCriteria.artist == undefined ||
    searchCriteria.yearPublished == undefined
    ){
    
    return collection;
  }
  else{
    for (let album of collection){
      if (
        album.artist == searchCriteria.artist && 
        album.yearPublished == searchCriteria.yearPublished
      ){
        searchResults.push(album);
      }
    }
    return searchResults;
  }
}

console.log("---search Test---");

// Should return the album "London Calling" by The Clash
console.log(search(myCollection,{trackName:"Lost in the Supermarket"}));
// Should return a blank array since The Clash didn't release an album in 1937
// - This is despite track 6 "Spanish Bombs" about the bombing of Guernica
console.log(search(myCollection,{artist:"The Clash",yearPublished:1937}));
// Should return the album "Inflammable Material" by Stiff Little Fingers
console.log(search(myCollection,{artist:"Stiff Little Fingers",yearPublished:1979}));
// Should return the entire collection due to invalid search parameters
console.log(search(myCollection,{}));









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
