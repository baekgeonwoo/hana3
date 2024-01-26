const user = { id: 1, name: "P", age: 33 };
const { name: n, age = 30 } = { name: "LEE" };

const fn = ({ age }) => age;
// function fn({ age }) {
//   return age;
// }
const { age2: age3 = fn(user) } = { age22: 20 }; // age22가 없으면 age3의 값이 들어간다.(default 값)
console.log(age3);
