function highAndLow(numbers) {
    // split() method -> string to array
    var max;
    var min;
    var highLow = []
    var arr = numbers.split(" ");
    for (var i = 0; i < arr.length; i++) {
        max = Math.max.apply(null, arr);
        min = Math.min.apply(null, arr);
    }
    highLow.push(max, min);
    return highLow.join(' ');
}

console.log(highAndLow("2 66 -12 553 -914"));

//split() and join() methods
