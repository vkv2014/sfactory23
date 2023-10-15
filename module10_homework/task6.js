/*
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
*/
let arr = [1, 1, 1, 1]
let allEqual = true;

for (let i = 0; i < arr.length - 1; i++) {
    allEqual = arr[i] == arr[i + 1];
    if (!allEqual) break;
}

const result = allEqual ? 'Все ' : 'Не все ';
console.log(result + 'элементы массива равны');
