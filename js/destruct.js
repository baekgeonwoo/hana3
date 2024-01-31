// 과제 1
for (let i = 0.1; i < 1; i = i + 0.1) console.log(Math.round(i * 10) / 10);

// 과제 2
function addPoints(a, b) {
  let len = Math.max(String(a).length, String(b).length);
  let ans = +(a + b).toFixed(len);

  console.log(ans);
  return ans;
}

addPoints(0.21354, 0.1);
addPoints(0.14, 0.28);
addPoints(0.34, 0.226);

const arr = [100, 200, 300, 400, 500, 600, 700];

for (let num of arr) {
  console.log(num);
}

function memoized(fn) {
  const memoizedTable = { 0: 0, 1: 1 };
  return function B(k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const memoizedPibonacci = memoized(function A(n) {
  memoizedPibonacciRunCnt += 1;
  if (n === 0) return 0;
  if (n === 1) return 1;
  return memoizedPibonacci(n - 1) + memoizedPibonacci(n - 2);
});

let memoizedPibonacciRunCnt = 0;
console.log(memoizedPibonacci(4));
console.log(memoizedPibonacci(7));
console.log(memoizedPibonacciRunCnt);

const kim = { nid: 3, nm: "Hong", addr: "Busan" };

const newKim = copyObject(kim);
newKim.addr = "Daegu";
console.log(kim.addr !== newKim.addr);

function copyObject(arr) {
  const newArr = [];
  for (let a of Reflect.ownKeys(arr)) {
    newArr.push(a);
  }
  return newArr;
}
