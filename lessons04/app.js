const getAllServicePrices = (...servicePrice) => {
  return servicePrice.reduce((acc, item) => (acc += item));
};
console.log(getAllServicePrices(1000, 2000));

function getFullPrice(screenPrice, f1) {
  return screenPrice + f1;
}
console.log(getFullPrice(5000, getAllServicePrices(3000, 5000)));

function getTitle(titel) {
  titel = titel.trim("");
  const newStr = titel[0].toUpperCase() + titel.slice(1);
  return newStr;
}
console.log(getTitle("maksim"));

function getServicePercentPrices(fullPrice, rollback) {
  const servicePercentPrice = fullPrice - (fullPrice / 100) * rollback;
  return servicePercentPrice;
}
console.log(getServicePercentPrices(15000, 10));
