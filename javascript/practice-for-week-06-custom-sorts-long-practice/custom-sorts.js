function ageSort(users) {
  // Your code here
  return users.sort( (a, b) => a.age - b.age );
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a % 2 === b % 2) {
      return a - b;
    } else if (a % 2 == 1) {
      return -1;
    } else {
      return 1;
    }
  });
}

function validAnagrams(s, t) {
  // Your code here
  let sMap = {}
  let tMap = {}
  
  for (const x of s) {
    if (!(x in sMap)) {
      sMap[x] = 0;
    }
    sMap[x] += 1;
  }
  for (const x of t) {
    if (!(x in tMap)) {
      tMap[x] = 0;
    }
    tMap[x] += 1;
  }

  for (const [k, v] of Object.entries(sMap)) {
    if (tMap[k] != v) {
      return false;
    }
  }

  return true;
}

function reverseBaseSort(arr) {
  // Your code here
  function numDigits(num) {
    let res = 1;
    num = Math.floor(num / 10);
    while (num > 0) {
      res++;
      num = Math.floor(num / 10);
    }
    return res;
  }

  return arr.sort((a, b) => {
    const aDigits = numDigits(a);
    const bDigits = numDigits(b);
    if (aDigits === bDigits) {
      return a - b;
    } else if (aDigits > bDigits) {
      return -1;
    } else {
      return 1;
    }
  });
}

function frequencySort(arr) {
  // Your code here
  let counter = {};

  for (const x of arr) {
    if (x in counter) {
      counter[x] += 1;
    } else {
      counter[x] = 1;
    }
  }

  let sortedCounter = Array.from(Object.entries(counter));

  sortedCounter.sort((a, b) => {
    const k1 = Number(a[0]), v1 = a[1];
    const k2 = Number(b[0]), v2 = b[1];
    if (v1 === v2) {
      return k2 - k1;
    } else {
      return v1 - v2;
    }
  });

  let rank = {}
  sortedCounter.forEach((x, i) => {
    rank[x[0]] = i;
  });

  return arr.sort((a, b) => rank[a.toString()] - rank[b.toString()]);
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];