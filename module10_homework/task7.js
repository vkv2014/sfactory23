/*
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/
let arr = [1, 1, 1, 1, 0, 2, true, 'true'];
let counterOdd = 0, counterEven = 0, counterZero = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'number') {
        if (arr[i] === 0) counterZero++;
        else if (arr[i] % 2 === 0) counterEven++;
        else counterOdd++;
    }
}


console.log('Четных: ' + counterEven);
console.log('Нечетных: ' + counterOdd);
console.log('Нулей: ' + counterZero);
