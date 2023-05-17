function maxIndex(arr) {
    let com = 0
    let ind = 0
    if (arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
            if (com < arr[i]) {
                com = arr[i]
                ind = i
            }
        }
        return ind
    }
    return -1
}


console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1

