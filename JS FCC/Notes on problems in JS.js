// Setup
function phoneticLookup(val) {
  //declares function name "phoneticLookup" with (val) to be passed through

  //

  var lookup = {
    //assigns var lookup as object with following key values
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy", //comma out each until final parameter
    foxtrot: "frank",
  };
  result = lookup[val]; //assigns result value as a parameter is passed through (val) to lookup within the function phoneticLookup
  //
  return result; //returns result at end of function which is the value of lookup[val]
}

// Change this value to test
console.log(phoneticLookup("foxtrot")); //returns chicago when argument foxtrot is passed through phoneticLookup
