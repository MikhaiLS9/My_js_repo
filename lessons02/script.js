let titel = 'My_js_repo'
let screens = `"Простые, Сложные, Интерактивные"`
let screenPrice = 5
let rollback = 5
let fullPrice = 15000
let adaptive = true
// alert('Hello World');
console.log(`title = ${typeof(titel)}, fullPrice${typeof(fullPrice)}, adaptive ${typeof(adaptive)}`);
console.log(`Стоимость верстки экранов ${screenPrice} рублей, Стоимость разработки сайта ${fullPrice} рублей `);
console.log(screens.toLowerCase());
console.log(fullPrice * (rollback/100));