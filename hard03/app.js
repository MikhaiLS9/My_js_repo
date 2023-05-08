const week = {
  Monday: "Понедельник",
  Tuesday: "Вторник",
  Wednesday: "Среда",
  Thursday: "Четверг",
  Friday: "Пятница",
  Saturday: "Суббота",
  Sunday: "Воскресенье",
};

const lang = (lang,num) => {
  //   используем if
  //   if (lang === "ru") {
  //     return Object.values(week);
  //   }
  //   if (lang === "en") {
  //     return Object.keys(week);
  //   }
  //   return false;

  //   Используем switch-case
  //   switch (lang) {
  //     case "ru":
  //       return Object.values(week);
  //     case "en":
  //       return Object.keys(week);
  //     default:
  //       return false;
  //   }

  // Через многомерный массив без ифов и switch.
  const week = {
    ru: [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],
    en: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  };
  return week[lang][num];
};

console.log(lang("en",1));
console.log(lang("ru",1));

const namePerson = (name) =>
  name === "Артем"
    ? "директор"
    : name === "Александр"
    ? "преподаватель"
    : "студент";

console.log(namePerson("Арeeтем"));
