function sum(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}

// module.exports = {
//     sum,
//     sub
// }

module.exports.sum = sum;
module.exports.sub = sub;

// if nothing is exported, then require will return empty object when run in main.js
// for example 
/* module.exports = {
    // sum,
    // sub
} */

// commonJS module system --- require()