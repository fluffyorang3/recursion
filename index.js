const array = []

function fibs(n) {
    if(n === 0) {
        return 0
    } if(n === 1) {
        return 1
    } else if(n > 1){
        result = fibs(n-1) + fibs(n-2)
        return result
    }
}

console.log(fibs(7))