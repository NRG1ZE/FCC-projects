// Setup
function phoneticLookup(val) {
  //declares function name "phoneticLookup" with (val) to be passed through

  //

  var lookup = {
    //assigns var lookup as object with following parameters
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy", //comma out each until final perameter
    foxtrot: "frank",
  };
  result = lookup[val]; //assigns result value as the val passed through lookup within the function phoneticLookup
  //
  return result; //returns result at end of function which is the value of lookup[val]
}

// Change this value to test
console.log(phoneticLookup("foxtrot")); //returns chicago when string foxtrot is passed through phoneticLookup
