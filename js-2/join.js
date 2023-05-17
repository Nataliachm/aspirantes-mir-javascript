function join(arr) {
    let suma = ""
    for (let i = 0; i < arr.length; i = i + 1) {
        i < arr.length - 1 ? suma = suma + i + ", " : suma = suma + i
    }
    return suma
}

console.log(join([1, 2, 3]))
console.log(join([10, 8, 12, 5]))
console.log(join([])) 
