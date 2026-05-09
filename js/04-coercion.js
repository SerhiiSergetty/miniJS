/*
 * Перетворення типів: рядки
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */
console.log(String(5)); // Явне перетворення на рядок
console.log(String(true)); // Явне перетворення на рядок
console.log(String(false)); // Явне перетворення на рядок
console.log(String(null)); // Явне перетворення на рядок
console.log(String(undefined)); // Явне перетворення на рядок

// НЕЯВНЕ ПЕРЕТВОРЕННЯ
console.log('5' + 5); // Неявне перетворення. 5 призводить до рядка та за допомогою + відбувається конкатенація. Відповідь 55
console.log(3 + '5'); // Відбувається те самеб що на рядку 13.  Відповідь 35
console.log('5' + true); // true призводить до рядка. Відповідь 5true
console.log('5' + false); // false призводить до рядка. Відповідь 5false
console.log('5' + null); // 5false
console.log('5' + undefined); // 5undefined
