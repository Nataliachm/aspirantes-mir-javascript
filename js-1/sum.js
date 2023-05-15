function sum(num){
    let i=1
    let suma=0

    while (i<=num){
        suma=suma+i
        i++
    }
    return suma
}

const r= sum(4)
console.log(r)