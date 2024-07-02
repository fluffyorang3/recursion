let unsortedArray = [3, 2, 1, 13, 8, 5, 0, 1]

let array = [1, 2, 3, 13, 0, 1, 5, 8]

let half_length = Math.ceil(array.length / 2)

let leftSide = array.slice(0, half_length)

let rightSide = array.slice(half_length)

console.log(leftSide, rightSide)

let newArray = []

function merge(){
    while(leftSide.length && rightSide.length) {
        if(leftSide[0] < rightSide[0]){
            newArray.push(leftSide[0])
            leftSide.shift()
        } else {
            newArray.push(rightSide[0])
            rightSide.shift()
        }
    }
    console.log(newArray)
}

merge()



