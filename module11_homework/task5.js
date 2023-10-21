/*
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.

Протестируйте функцию на любых значениях и выведите результат в консоль.
*/
const power = (x, n) => {
    if (n === 0) {
        return 1;
    } else {
        let result = x;
        for (let i = 1; i < n; i++) {
            result *= x;
        }
        return result;
    }
};

const x = 2; // число
const n = 3; // степень
const result = power(x, n);
console.log(result);