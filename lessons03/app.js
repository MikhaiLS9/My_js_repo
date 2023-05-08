// let titel = prompt("Как называется ваш проект?");
// let screens = prompt("Какие типы экранов нужно разработать?");
// let screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
// let rollback = 5;

// let adaptive = !!prompt("Нужен ли адаптив на сайте?", "true или false");
// let service1 = prompt("Какой дополнительный тип услуги нужен?")
// let servicePrice1 = Number(prompt("Сколько это будет стоить?"));
// // let service2 = prompt("Какой дополнительный тип услуги нужен?")
// let servicePrice2 = Number(prompt("Сколько это будет стоить?"));
// let fullPrice = screenPrice + servicePrice1 + servicePrice2;
// let servicePercentPrice = Math.ceil(fullPrice - rollback);

// console.log(servicePercentPrice);

function getDiscounts(discounts) {
  if (discounts > 30000) console.log("Даем скидку в 10%");
  else if (discounts > 15000 && discounts < 30000) console.log("Даем скидку в 5%");
  else if (discounts < 15000 && discounts > 0) console.log("Скидка не предусмотрена");
  else if (discounts === 0 || discounts === 15000 || discounts || 30000)
    console.log("на усмотрение специалиста");
}
getDiscounts(150001);
