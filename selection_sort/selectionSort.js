function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

function selectionSort(arr) {
    let newArr = [];
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        let smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest, 1)[0]);
    }
    return newArr;
}
console.log(selectionSort([5, 8, 99, 4, 1, 0]));
console.log(selectionSort(["f", "yy", "abc", "a", "y"]));