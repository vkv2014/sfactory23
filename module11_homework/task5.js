/*
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.
*/
const power1 = (x, n) => {
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

const power2 = (x, n) => x ** n;
const power3 = (x, n) => {
    Math.pow(x, n);
}

const x = 3; // число
const n = 0; // степень
const result1 = power1(x, n);
const result2 = power1(x, n);
const result3 = power1(x, n);
console.log(result1);
console.log(result2);
console.log(result3);