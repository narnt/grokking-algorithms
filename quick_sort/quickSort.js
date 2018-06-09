function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let point = arr[0]
        let less = arr.slice(1).filter((i) => i <= point);
        let greater = arr.slice(1).filter((i) => i > point);
        return (quickSort(less) + "," + point + "," + quickSort(greater)).split(",");
    }
}

console.log(quickSort([10, 1, 5, 2, 8]));
console.log(quickSort(["g", "h", "a", "o", "p"]));