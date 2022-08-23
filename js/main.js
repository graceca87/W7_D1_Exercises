/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/
// ----------------------------- Python --------------------------
//     def find_not_consecutive(array):
// #         ## loop through elements in array ##
//        for i in array:
// #       ## if it's consecutive the index of i should be i-1 ##
// #       ## so if you add one to the index it should be the same value as i ##
// #       ## if that is not true: ##
//           if array[i] != array[i-1] +1:
//               return i

    
// find_not_consecutive([1, 2, 3, 5, 6, 7])


// ----------------------------- JavaScript -----------------------
let exerciseOneArr = [1, 2, 3, 5, 6, 7]

function find_not_consecutive(array){
    for (let i of array)
    if (array[i] != (array[i-1] +1)){
        return i
    }
}

console.log(find_not_consecutive(exerciseOneArr))


//----------------------------------- Exercise #2 -----------------------------------

// ----------------------------- Python --------------------------
    // def sum_of_pos(nums):
    // l = 0
    // for n in nums:
    //     if n > 0:
    //         l += n
    //     return l
        
// sum_of_pos([10, 12, -9, 3, -1, 0, 15] )

// sum_of_pos([3, 5, 7, 9, -10, 2, -22, -1] )

// sum_of_pos([-3, -5, -7, -9, -10, -2, -22, -1] )

// ----------------------------- JavaScript -----------------------

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 
let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 

function sum_of_pos(nums){
    let l = 0
    for (let n of nums)
    if (n > 0) {
             l += n;
         } 
    return l;
}

console.log(sum_of_pos(numbers1))
console.log(sum_of_pos(numbers2))
