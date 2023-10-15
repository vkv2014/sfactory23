//Создайте произвольный массив Map. 
let myMap = new Map();
myMap.set('one', 'val1');
myMap.set('two', 'val2');
myMap.set('three', 'val3');

//Получите его ключи 
let keysArray = Array.from(myMap.keys());
console.log(keysArray);

//и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.
for (let [key, value] of myMap) {
    console.log(`Ключ — ${key}, значение — ${value}`);
}