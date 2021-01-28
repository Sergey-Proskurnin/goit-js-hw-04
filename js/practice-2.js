const users = [
  { name: 'John', age: 16 },
  { name: 'Kain', age: 18 },
  { name: 'Smit', age: 22 },
];

const arrayForEach = (arrs, callBackFn) => {
return callBackFn(arrs)
};

function sortName(arr) {
    const nameArray = [];
  for (const ar of arr) {
    //   console.log(ar.name);
    if (ar.age >= 18) {
        nameArray.push(ar.name)
    }
  }
  return nameArray;
}
console.log(arrayForEach(users, sortName));
