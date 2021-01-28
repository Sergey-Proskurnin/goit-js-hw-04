const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);
        console.log(passed);

        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
};

const callback1 = function (value) {
    return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
    return value <= 4;
};

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);