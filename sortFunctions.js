// SELECTION SORT

var array = [9, 6, 3, 4, 7, 8, 1, 3, 2]

var selectionSort = function (array) {
    for (var i = 0; i < array.length; i++) {
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        var temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

console.log(selectionSort(array));