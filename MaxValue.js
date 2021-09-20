const ar =[23,55,103,4,70]
const largest =maxValue(ar)
function maxValue(arr){
let output;
if (arr === undefined || arr.length == 0) {
output = "Array is empty please add an item to the array"
} else {
 let biggestNumber =Math.max(...arr)
output =`the largest number in the array is ${biggestNumber}`
} 
console.log(output)
}
