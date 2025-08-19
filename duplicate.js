const nums = [4, 3, 2, 7, 8, 2, 3, 1];

function countDuplicates(data) {
  const output = {};

  // logic here
  data.map((d) => {
    output[d] = (output[d] || 0) + 1;
  });

  return output;
}

console.log(countDuplicates(nums));
