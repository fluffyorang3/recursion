function fibs(n) {

    const array = []
    
    function fibMaker(num){
        if(num < 2) {
            return num
        } else if(num > 1){
            return fibMaker(num-1) + fibMaker(num-2)
        }
    }


    for(let i = 0; i < n; i++){
        array.push(fibMaker(i))
    }
    return array
}

console.log(fibs(10))
