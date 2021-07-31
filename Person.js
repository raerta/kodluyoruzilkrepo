const person = [
  {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  },
];

const OtuzYas = person.filter((p) => p.age > 30);
const JsBiliyorMu = person.filter((p) => p.languages.includes("JavaScript"));

console.log("30 Yaş Üstü Kişiler: ", OtuzYas);
console.log("JavaScript Bilen Kişiler: ", JsBiliyorMu);
