function disemvowel(str) {
    var newArr = str.split("");
    //global
    var string = newArr.map(i => i.replace(/[aeiou]/g, ''))
    return string.join("");
}

console.log(disemvowel("These aren't the droids you're looking for."));


//BEST PRACTICE
function disemvowel(str) {
    //global case-insensitive
    return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel("These aren't the droids you're looking for."));


