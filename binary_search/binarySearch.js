let binarySearch = function(list, item) {
    let low = 0;
    let high = list.length;
    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        let guess = list[middle];
        if (guess === item) {
            return middle;
        } else if (guess > item) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }
}

let nList = [1, 2, 3, 4, 5, 6, 7];
let wList = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(binarySearch(nList, 4));
console.log(binarySearch(wList, 'e'));