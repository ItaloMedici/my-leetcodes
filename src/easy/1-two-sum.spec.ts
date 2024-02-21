/**
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.

  

  Example 1:

  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
  Example 2:

  Input: nums = [3,2,4], target = 6
  Output: [1,2]
  Example 3:

  Input: nums = [3,3], target = 6
  Output: [0,1]
  

  Constraints:

  2 <= nums.length <= 104
  -109 <= nums[i] <= 109
  -109 <= target <= 109
  Only one valid answer exists.
  

  Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */

function twoSum(nums: number[], target: number): number[] {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result;
}

test("twoSum", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);

  expect(twoSum([1, 2, 7], 3)).not.toStrictEqual([0, 2]);
  expect(twoSum([1, 2, 7], 3)).toStrictEqual([0, 1]);

  expect(twoSum([2, 2, 4, 4], 8)).toStrictEqual([2, 3]);
});

/** FASTEST */

function twoSumFastest(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const diff = target - current;

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(current, i);
  }

  return [];
}

test("twoSumFastest", () => {
  expect(twoSumFastest([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  expect(twoSumFastest([3, 2, 4], 6)).toStrictEqual([1, 2]);
  expect(twoSumFastest([3, 3], 6)).toStrictEqual([0, 1]);

  expect(twoSumFastest([1, 2, 7], 3)).not.toStrictEqual([0, 2]);
  expect(twoSumFastest([1, 2, 7], 3)).toStrictEqual([0, 1]);

  expect(twoSumFastest([2, 2, 4, 4], 8)).toStrictEqual([2, 3]);
});
