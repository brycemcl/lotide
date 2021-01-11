const map = (arrayArg, functionArg) => {
  const results = [];
  for (const item of arrayArg) {
    results.push(functionArg(item));
  }
  return results;
};


module.exports = { map };