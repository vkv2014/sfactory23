/*(function () {
    const local = 123;
    console.log(local);  // 123
}());

//console.log(local);  // Uncaught ReferenceError: local is not defined

//
function outerFunction() {
    var outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // innerFunction имеет доступ к outerVariable из внешней функции
    }

    return innerFunction;
}

var myFunction = outerFunction(); // myFunction теперь содержит innerFunction
myFunction(); // вызывает innerFunction, которая все еще имеет доступ к переменной outerVariable

//

console.log(typeof (myFunction))

const count = function () {
    let counter = 1;
    function count() {
        console.log(counter);
        counter++;
    }
    return count;
}();

count();  // 1
count();  // 2
counter = 1;
count();  // 3

MAX_COUNT = 3;

const counter = (function (max) {
    let current = 0;

    return {
        getCurrent() {
            return current;
        },

        increment() {
            if (current === max) {
                return;
            }
            current++;
        },

        decrement() {
            if (current === 0) {
                return;
            }
            current--;
        },
    };
})(MAX_COUNT);

console.log(counter.getCurrent());  // 0

counter.decrement();
console.log(counter.getCurrent());  // 0
counter.increment();
console.log(counter.getCurrent()); // 1
counter.increment();
console.log(counter.getCurrent());  // 2
counter.increment();
console.log(counter.getCurrent());  // 3
counter.increment();
console.log(counter.getCurrent());  // 3
counter.decrement();
console.log(counter.getCurrent());  // 2


MAX_COUNTER = 3;
const counter = (function () {
    let current = 0;
    return {
        getCurrent() {
            return current;
        },
        increment() {
            if (current === 3) {
                return 3;
            }
            current++;
        },
        decrement() {
            if (current === 0) {
                return 0;
            }
            current++;
        }
    }
})(MAX_COUNTER);
console.log(counter.getCurrent());  // 0

counter.decrement();
console.log(counter.getCurrent());  // 0
counter.increment();
console.log(counter.getCurrent()); // 1
counter.increment();
console.log(counter.getCurrent());  // 2
counter.increment();
console.log(counter.getCurrent());  // 3
counter.increment();
console.log(counter.getCurrent());  // 3
counter.decrement();
console.log(counter.getCurrent());  // 2

const count = function () {
    let counter = 1;
    function count() {
        console.log(counter);
        counter++;
    }
    return count;
}();

count();  // 1
count();  // 2
counter = 1;
count();  // 3
console.log(counter);

*/

let arr = [1, 2, 3];

arr.forEach(function (elem) {
    console.log(elem * 2);
})