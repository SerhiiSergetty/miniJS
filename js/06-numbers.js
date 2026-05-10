/*
Фрифметичні функції
*
* - Number.parseInt
* - Number.parseFloat
* - Math
*/
//  Попросіть користувача ввести число
//  Виведіть результат в консоль
//  Приведіть рядок до числа

let userInput = prompt('Enter your number'); // Просимо користувача ввести число
userInput = Number(userInput); // Повертаеться наприклад "100" і за допомогою Number перетворюємо його на число
console.log(userInput); // 100 число

const userInput1 = Number(prompt('Enter your number')); // Такий самий результат як на рядках 12-13 тільки коротше
console.log(userInput1); // 100 число

/*
? Дізнайтесь числове значення ширини елемента
*/
const elementWidth = '50px'; // змінна містить тип рядок
console.log(elementWidth); // "50px"

const numericalWidth = Number.parseInt(elementWidth); // Задопомогою .parseInt() витягуємо число до першої літери
console.log(numericalWidth); // 50

/* 
? Дізнайтесь числове значення висоти елемента
*/
const elementHeigth = '200.74px';
const numericalHeigth = Number.parseFloat(elementHeigth); // .parseFloat дозволяє повертати звичайні та дробові числа
console.log(numericalHeigth); // 200.74

/*
? Попросіть користувача ввести два числа, складіть їх та виведіть результат у консоль
*/
const num1 = Number(prompt('Enter first number')); // Запит ввести число 1 (Number розпізнає також дробові числа через крапку)
const num2 = Number(prompt('Enter second number')); // Запит ввести число 2 (Number розпізнає також дробові числа через крапку)

const result = num1 + num2;
console.log(result); // Виводить додані числа

//ЗАОКРУГЛЕННЯ ЧИСЕЛ__________________________________________________________________________________________________________
/*
? Напиши скрипт, який виводить у консоль заокруглені вгору/вниз значення 
? змінної value. Використовуй методи Math.floor(), Math.ceil() 
? та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9
*/
let value = 27.9;
console.log(value); // 27.9

value = Math.round(value); // Math.round() заокруглює в більшу або меншу сторону
console.log(value); // 28

value = Math.floor(value); // Math.floor() завжди заокруглює до меншого цілого числа
console.log(value); // 27

value = Math.ceil(value); // Math.ceil() Завжди заокруглює до більшого цілого числа
console.log(value); // 28
