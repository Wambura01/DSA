// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const strs = ["flower", "flow", "flight"];
const longestCommonPrefix = (strs) => {
  let solution = "";

  if (strs === null || strs.length === 0) return solution; //check if the string is null or empty

  // loop through the first string in the array
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    // loop through all other strings in the array
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) return solution;
    }

    solution = solution + char;
  }

  return solution;
};

longestCommonPrefix(strs);
