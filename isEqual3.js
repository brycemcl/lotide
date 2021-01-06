const isEqual = (actual, expected) => {
  console.log("start");
  console.log(actual);
  console.log(expected);
  if (typeof actual === "object") {
    actual = JSON.stringify(actual);
  }
  console.log("after 1st");
  console.log(actual);
  console.log(expected);
  if (typeof expected === "object") {
    expected = JSON.stringify(expected);
  }
  console.log("after 2nd");
  console.log(actual);
  console.log(expected);
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};



// console.log([1, 2], [1, 2, 3]);
isEqual([1, 2], [1, 2, 3]);
// console.log([1, 2], [1, 2]);
// console.log(isEqual([1, 2], [1, 3]));
