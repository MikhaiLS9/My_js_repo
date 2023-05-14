const WEEK = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const NOW_DAY = new Date().getDay() - 1;
const DIV = document.querySelector(".week");

function getDaysWeek() {
  let out = "";
  WEEK.forEach((item, index) => {
    if (index === NOW_DAY) out += "<b>" + item + "</b>" + " ";
    else if (index === 6 || index === 5) out += "<i>" + item + "</i>" + " ";
    else out += item + " ";
  });
  DIV.innerHTML = out;
}

getDaysWeek();
