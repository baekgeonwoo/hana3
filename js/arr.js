const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.slice(1, 3));
console.log(arr2.slice(2));
arr2.splice(1, 3);
console.log(arr2);
arr2.splice(1, 0, 2, 3, 4);
console.log(arr2);
arr2.splice(2);
console.log(arr2);
arr2.splice(1, 0, 2, 3, 4);
console.log(arr2);

// 7번
arr2.splice(2, 3, "X", "Y", "Z", 4, 5);
console.log(arr2);

//8번
arr2.splice(2, 5, 3, 4, 5);
console.log(arr2);
arr2.length = 2;
const arr3 = [...arr2, "X", "Y", "Z", 4, 5];
console.log(arr3);
