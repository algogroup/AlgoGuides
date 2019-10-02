//https://leetcode.com/problems/next-greater-element-ii/
//Using no-stack method
var nextGreaterElements = function (nums) {
    let j = 1
    let output = []
    for (let i = 0; i < nums.length; i++) {
        j = i + 1
        while (true) {
            //circular logic here
            if (j === nums.length) {
                j = 0
                // continue;
            }
            if (j === i) {
                output.push(-1)
                //we looped around and found nothing, so break
                break
            }
            if (nums[i] < nums[j]) {
                output.push(nums[j])
                break;
            }
            j++
        }
    }
    return output
};

console.log(nextGreaterElements([1, 2, 1]))
