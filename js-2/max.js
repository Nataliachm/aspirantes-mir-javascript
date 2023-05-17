function max(arr) {
    let com = 0
    if (arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
            com = com < arr[i] ? arr[i] : com
        }
        return com
    }
    return
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined