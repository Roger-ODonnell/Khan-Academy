function BinarySearch(arr, target, low, high) {

    while (high >= low) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] > target) { return BinarySearch(arr, target, low, mid - 1); }
        else { return BinarySearch(arr, target, mid + 1, high); }
    }

    return -1;
}

let arr = [2, 3, 4, 10, 40];
let n = arr.length;
let target = 4;
let result = BinarySearch(arr, target, 0, n - 1);
var response = document.getElementById("returnedIndex");
if (result == -1)
    console.log("Element is not present in array");
else
console.log("Element is present in the array " + result);