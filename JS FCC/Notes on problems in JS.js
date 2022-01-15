// Using objects for lookups
function phoneticLookup(val) {
  //declares function name "phoneticLookup" with (val) to be passed through

  //

  var lookup = {
    //assigns var lookup as object with following key values
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy", //comma out each until final key value
    foxtrot: "frank",
  };
  result = lookup[val]; //assigns return of lookup(val), as a parameter is passed through (val) to lookup within the function phoneticLookup which passes to return result
  //
  return result; //returns result at end of function which is the value of lookup[val]
}

// Change this value to test
console.log(phoneticLookup("foxtrot")); //returns chicago when argument foxtrot is passed through phoneticLookup

//Accessing nested objects
var myStorage = {
  //var declared object 'myStorage'
  car: {
    //object containing sub objects
    inside: {
      //
      "glove box": "maps", //sub property key-val pairs
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
var gloveBoxContents = myStorage.car.inside["glove box"]; // var gloveBoxContents calls by dot anot. and bracket anot.

//accessing nested Arrays
const myPlants = [
  //const declares object myPlants containing an array with two objects containing nested arrays
  {
    //array[0]
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    //array[1]
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree =
  myPlants[1]
    .list[1]; /*to access pine the const secondTree is declared to access array my plants[1] declared
 to go in the second array and then list[1] to enter nested array and view the 2nd element*/
console.log(secondTree); //returns pine

//Record Collection
/*
 */
// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Record Change written
function updateRecords(records, id, prop, value) {
  const album = records[id];
  if (prop !== "tracks" && value) {
    album[prop] = value;
  } else if (prop === "tracks" && album.hasOwnProperty("tracks") === false) {
    let newArray = [];
    newArray.push(value);
    album[prop] = newArray;
  } else if (prop === "tracks" && value) {
    console.log(album[prop]);
    album[prop].push(value);
    console.log(album[prop]);
  } else if (value === "") {
    delete album[prop];
  }
  return records;
}

// Record Collection DRY METHOD
function updateRecords(records, id, prop, value) {
  const album = records[id];
  const details = album[prop];
  //console.log(album,"prop: ",prop,"value: ",value)
  if (prop !== "tracks" && value) {
    album[prop] = value;
    //console.log(album)
  } else if (prop === "tracks" && !album[prop]) {
    album[prop] = [value];
    //console.log(album[prop])
  } else if (prop === "tracks" && value) {
    //console.log(album[prop])
    album[prop].push(value);
    //album[prop] = [value]
    //console.log("3rd Conditional",id,prop,typeof album[prop])
    //console.log(album[prop])
  } else if (!value) {
    delete album[prop];
  }
  return records;
}

//iterating through loops
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

//iterating through arrays with a loop
var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (
  var i = 0; // sets var i to 0
  i < myArr.length; //determines repetious to i less than length
  i++ //increases the i var by 1 on each iteration
) {
  total += myArr[i];
}

console.log(total);
