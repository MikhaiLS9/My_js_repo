const arr = ["111", "222", "333", "444", "555", "666"];

function getNumber(arr) {
  return arr.filter((item) =>
    item[0] === "4" || item[0] === "2" ? true : false
  );
}
console.log(getNumber(arr));
