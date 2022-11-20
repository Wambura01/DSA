//O(n)...PROPORTIONAL
//example operation is adding and removing an item from the front/middle of the array
const operation1 = (n) => {
  for (let i = 0; i < n; i++) console.log(i);
};

// operation1(10);

//O(n^2)...LOOP WITHIN A LOOP
const operation2 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

//operation2(10);

//O(1)...CONSTANT TIME
//example operation is adding and removing an item from the end of the array
const operation3 = (n) => {
  return n + n;
};

//operation3(10)
