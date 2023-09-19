/*
Problem: https://www.hackerrank.com/challenges/sparse-arrays/problem?isFullScreen=true

Solution analysis: To compare the occurence of each the query. We can create an occurence object of the stringList

f.e : stringList = ['ab','ab','abc','bc']
occurenceString = {
    'ab':2,
    'abc':1,
    'bc':1
}

After that, we'll loop through the queries array and print out the value of the occurenceString object

*/

const sparseArray = (stringList, queries) => {
  let queriesCount = [];

  const occurenceStringObj = stringList.reduce((obj, value) => {
    if (obj[value]) {
      obj[value]++;
    } else {
      obj[value] = 1;
    }
    return obj;
  }, {});

  for (let i = 0; i < queries.length; i++) {
    if (occurenceStringObj[queries[i]]) {
      queriesCount.push(occurenceStringObj[queries[i]]);
    } else queriesCount.push(0);
  }

  return queriesCount;
};
