const validTime = (time) => {
  let arrTime = time.split(":");
  if (
    (parseInt(arrTime[0]) > 24 || parseInt(arrTime[1]) < 59) &&
    (parseInt(arrTime[0]) < 24 || parseInt(arrTime[1]) > 59)
  )
    return true;
  else return false;
};

validTime("13:58");
validTime("25:51");

// B2

const missingNumber = (arr) => {
  let b = arr.sort((a, b) => a - b);

  if (b[0] !== 0) {
    return 0;
  } else if (b[b.length - 1] !== b.length) {
    return b.length;
  } else {
    for (let i = 0; i <= b.length; i++) {
      if (b[i] !== parseInt(b[i + 1] - 1)) return parseInt(b[i] + 1);
    }
  }
};

missingNumber([3, 1, 0]);
missingNumber([1, 2, 3]);
missingNumber([0, 1, 2]);
