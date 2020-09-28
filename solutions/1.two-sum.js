/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

const { lookup } = require("dns");

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let TempMap = {}
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let complement = target - current;

        if (TempMap.has(complement)) {
            result[0] = TempMap.get(complement);
            result[1] = i;

            return result;
        }

        TempMap.set()

        TempMap.set(i, current);
    }
};
// @lc code=end

