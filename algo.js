function findMax(nums){
    let max_num = Number.NEGATIVE_INFINITY;

    for(let num of nums){
        if(num > max_num){
           max_num = num
        }
    }
    return max_num
}

findMax([3,4,5,6,7,8,9])