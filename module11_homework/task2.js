/*
Напишите функцию, которая принимает на входе любое число (но не больше 1 000), 
определяет, является ли оно простым, и выводит, простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. 
Обратите внимание на числа 0 и 1.
*/

function isNumberPrime(num) {
    if (num > 1000) {
        console.log('Данные не верны');
        return undefined;
    }

    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;

        return true;
    }
}

console.log(isNumberPrime(11111));