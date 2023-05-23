// let a: number = 1;
// // a = "1";
// console.log(a);

// function addOrConcat<T>(a: T, b: T): T {
//   return a + b;
// }

// const add = addOrConcat<number>(1, 2);
// const concat = addOrConcat<string>("hello", "world");

// console.log(add, concat);

// interface Person {
//   readonly firstName: string;
//   lastName: string;
//   middleName?: string;
//   getName?: (name: string) => string;
// }

// interface Employee extends Person {
//   salary: number;
//   title: string;
// }

// const employee1: Employee = {
//   firstName: "John",
//   lastName: "wick",
//   getName: (name) => name.toUpperCase(),
//   salary: 1000,
//   title: "Developer",
// };

// function combineItems<T, X>(a: T, b: X): { first: T; second: X } {
//   return {
//     first: a,
//     second: b,
//   };
// }

// const combined = combineItems<string, number>("one", 1);
// console.log(combined);
