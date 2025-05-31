const accountId = 144553
let accountEmail = "rudra@gmal.com"
// key word var
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// try {
//     accountId = 2 ; // not allowed
// } catch (error) {
//     console.log(Error);
    
// }
accountEmail = "hc@hc.com"
accountPassword = "6879"
accountCity = "benguluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

