const getAllServicePrices = (...servicePrice) => {
  return servicePrice.reduce((acc, item) => (acc += item));
};

function getFullPrice(screenPrice, f1) {
  return screenPrice + f1;
}
function getTitle(titel) {
  titel = titel.trim("");
  const newStr = titel[0].toUpperCase() + titel.slice(1);
  return newStr;
}

function getServicePercentPrices(fullPrice, rollback) {
  const servicePercentPrice = fullPrice - (fullPrice / 100) * rollback;
  return servicePercentPrice;
}

