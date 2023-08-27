const accountId = 101
let accountEmail = "tariq@yahoo.com"
var accountPassword= "12345"
accountCity = "Lucknow"

let accountState;

// accountId = 102 // Not Allow

/*
Prefer not to use Var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])