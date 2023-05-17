function sum(arr){
    let suma= 0
    for(let i=0; i < arr.length; i= i+1){
        suma= arr[i]+suma
    }
    return suma
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0