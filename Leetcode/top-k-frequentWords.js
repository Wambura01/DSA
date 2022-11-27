// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

const words = ["i", "love", "leetcode", "i", "love", "coding"];

var topKFrequent = function (words, k) {
  const fWords = {};

  for (let word of words) {
    fWords[word] = fWords[word] ? fWords[word] + 1 : 1;
  }

  let solution = Object.keys(fWords).sort((a, b) => {
    let countCompare = fWords[b] - fWords[a];
    if (countCompare == 0) return a.localeCompare(b);
    else return countCompare;
  });

  console.log("F-WORDS: ", solution.slice(0, k));
};

topKFrequent(words, 7);
