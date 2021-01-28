/** Рекурсия просчет факториала */
// 6! = 1 * 2 * 3 * 4 * 5 * 6
// const fact = (num) => {
//     if (num <= 2) {
//       return num;
//     }

//     return num * fact(num - 1);
//   };

// 5 * fact(4)
//     4 * fact(3)
//         3 * fact(2)
//             2
// let fibonArray = []
const fibon = (num) => {
  if (num <= 1) {
    return num;
  }

  return fibon(num - 1) + fibon(num - 2);
};

const fibonOf = fibon(8);
  console.log(fibonOf);
//   console.log(fibonArray);

// const user = {
//   id: '123213',
//   name: 'Alex',
//   salary: 1000,
//   greet() {},
//   address: {
//     city: 'Kyiv',
//     street: 'Nice street',
//   },
//   salary: 1000,
// };

//   const deepClone = (obj) => {
//     const clonedObj = {};
//     // key: address;
//     // value: {
//     //   city: 'Kyiv',
//     //   street: 'Nice street',
//     // }
//     for (let key in obj) {
//       const value = obj[key];

//       if (typeof value === 'object' && value !== null) {
//         clonedObj[key] = deepClone(value);
//       } else {
//         clonedObj[key] = value;
//       }
//     }

//     return clonedObj;
//   };

//   const superUser = deepClone(user);
//   console.log(superUser, '--cloned');
