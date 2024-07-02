let unsortedArray = [3, 2, 1, 13, 8, 5, 0, 1]

let array = [1, 2, 3, 13, 0, 1, 5, 8]

let half_length = Math.ceil(array.length / 2)

let leftSide = array.slice(0, half_length)

let rightSide = array.slice(half_length)

console.log(leftSide, rightSide)

let newArray = []



function merge(left,right){
    while(left.length && right.length) {
        if(left[0] < right[0]){
            newArray.push(left[0])
            left.shift()
        } else {
            newArray.push(right[0])
            right.shift()
        }
        console.log(`Right ${right}, Left ${left}`)
    }
    newArray = newArray.concat(left).concat(right);
    console.log(newArray)
}

merge(leftSide, rightSide)



