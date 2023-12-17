import { Temporal } from "temporal-polyfill";

const cal = Temporal.Calendar.from("iso8601");
const date = cal.dateFromFields({ year: 1999, month: 12, day: 31 }, {});

console.log(date.daysInMonth);
// output: 31
console.log(date.monthsInYear);
// output: 12
console.log(date.daysInYear);
// output: 365
