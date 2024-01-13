'use strict'
//1. Даний масив. Знайти суму та кіл-ть позитивних елементів.
let myArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 0;
let countPositivElement = 0;

myArray.forEach(function (element) {
    if (element > 0) {
        sum += element;
        countPositivElement++;
    };
});
console.log(`1. Сума позитивних значень: ${sum} та їх кіл-ть: ${countPositivElement}`);
//2.Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = myArray[0];
let minIndex = 0;

myArray.forEach(function (element, i) {
    if(element < minElement){
        minElement = element;
        minIndex = i;
    };
});
console.log(`2. Мінімальний елемент масиву: ${minElement}. Його порядковий номер: ${minIndex}.`);
//3.Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = myArray[0];
let maxIndex = 0;

myArray.forEach(function (element, i){
    if(element > maxElement){
        maxElement = element;
        maxIndex = i;
    };
});
console.log(`3. Максимальний елемент масиву: ${maxElement}. Його порядковий номер: ${maxIndex}.`);
//4.Визначити кількість негативних елементів.
let countNegativElement = 0;

myArray.forEach(function (element) {
    if(element < 0){
        countNegativElement++;
    };
});
console.log(`4. Кількість негативних елементів: ${countNegativElement}.`);
//5.Знайти кількість непарних позитивних елементів.
let countPositivUnpair = 0;

myArray.forEach(function (element){
    if(element > 0 && element % 2 !== 0){
        countPositivUnpair++;
    };
});
console.log(`5. Кількість непарниих позитивих елементів: ${countPositivUnpair}.`);
//6.Знайти кількість парних позитивних елементів.
let countPositivPair = 0;

myArray.forEach(function (element){
    if(element > 0 && element % 2 === 0){
        countPositivPair++;
    };
});
console.log(`6. Кількість парних позитивних елементів: ${countPositivPair}.`);
//7.Знайти суму парних позитивних елементів.
let sumCountPositivPair = 0;

myArray.forEach(function (element){
    if(element > 0 && element % 2 === 0){
        sumCountPositivPair += element;
    };
});
console.log(`7. Сума парних позитивних елементів: ${sumCountPositivPair}.`);
//8.Знайти суму непарних позитивних елементів.
let sumCountPositivUnpair = 0;

myArray.forEach(function(element){
    if(element > 0 && element % 2 !== 0){
        sumCountPositivUnpair += element;
    };
});
console.log(`8. Сума непарних позитивних елементів: ${sumCountPositivUnpair}.`);
//9.Знайти добуток позитивних елементів.
let multPositivElement = 1;

myArray.forEach(function(element){
    if(element > 0){
        multPositivElement *= element;
    };
});
console.log(`9. Добуток позитивних елементів: ${multPositivElement}.`)
//10.Знайти найбільший серед елементів масиву, остальні обнулити. 

myArray.forEach(function(element){
    if(element > maxElement){
        maxElement = element;
    };
});

myArray.forEach(function(element, i){
    if (element !== maxElement) {
        myArray[i] = 0;
    };
});
console.log(`10. Максимальний елемент масиву: ${maxElement}. Масив після обнулення: ${myArray}.`);