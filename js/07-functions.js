/*
 *Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Порядок виконання коду
 */

function greet(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`); // Створення функції з пареметрами в круглих дужках
}
greet('Sehii', 'Tashkinov'); // Виклик функції з аргументами в круглих дужках
greet('Diana', 'Beiley'); // Виклик функції

function sum(num1, num2) {
  const result = num1 + num2;

  return result; // повертає результат обчислення (якщо функція нічого не повертає тоді буде undefined)
}
console.log(sum(10, 20)); // Виводимо функцію з аргументами

/*
? Напиши функцію calcBMI(weigth, heigth) яка рохраховує та повертає індекс 
? маси тіла людини. Для цього необхідно розділити вагу на квадрат висотию
? 
? Вага та висота будуть спкціально передані як рядки.
? 
? Індекс маси тіла необхідно округлити до однієї цифри після коми.
*/

function calcBMI(weigth, heigth) {
  weigth = Number(weigth);
  heigth = Number(heigth);

  const resultBmi = weigth / heigth ** 2;
  return resultBmi.toFixed(1);
}
const bmi = calcBMI('88.3', '1.75');
console.log(bmi);
