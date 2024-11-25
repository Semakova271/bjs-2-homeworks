function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2))
  };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const maxElement = Math.max(...arr);
  const minElement = Math.min(...arr);
  return maxElement - minElement;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  }
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    const checkArr = func(...arrOfArr[i]);
    if (checkArr > maxWorkerResult) {
      maxWorkerResult = checkArr;
    }
  }
  return maxWorkerResult;
}
