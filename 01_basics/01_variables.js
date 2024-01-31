const accountId = 144553
let accountEmail = "ra@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;
//  accountId = 2  // not allowed

accountEmail = "rdx@yahoo.com"

accountPassword =
    "789123"

accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])