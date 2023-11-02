//Напишите функцию createCounter, которая принимает число и возвращает функцию-счётчик, начинающую отсчет с этого числа.
const countFrom5 = createCounter(5)
countFrom5()  // 5
countFrom5() // 6
countFrom5() // 7

const countFrom0 = createCounter(0)
countFrom0()  // 0
countFrom0()  // 1
countFrom0()  // 2

function createCounter(start) {
    let x = start - 1;

    return function () {
        return start++
    }
}

console.log(countFrom0())
console.log(countFrom0())
console.log(countFrom0())
