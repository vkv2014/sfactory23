//Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
let arr = [1, 2, 3];
console.log(arr.length);
let result = arr.map(function (item, index, array) {
    console.log(item)
});