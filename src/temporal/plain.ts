import { Temporal } from "temporal-polyfill";

const plainDate = Temporal.PlainDate.from({
  year: 2023,
  month: 12,
  day: 12,
});
console.log(plainDate.toString());
// output: 2023-12-12

const plainTime = Temporal.PlainTime.from({
  hour: 18,
  minute: 29,
  second: 9,
  millisecond: 63,
  microsecond: 346,
  nanosecond: 204,
});
console.log(plainTime.toString());
// output: 18:29:09.063346204

const plainDateTime = Temporal.PlainDateTime.from({
  year: 2023,
  month: 12,
  day: 12,
  hour: 18,
  minute: 29,
  second: 9,
  millisecond: 63,
  microsecond: 346,
  nanosecond: 204,
});
console.log(plainDateTime.toString());
// output: 2023-12-12T18:29:09.063346204

const plainYearMonth = Temporal.PlainYearMonth.from({
  year: 2023,
  month: 12,
});
console.log(plainYearMonth.toString());
// output: 2023-12

const plainMonthDay = Temporal.PlainMonthDay.from({
  month: 12,
  day: 12,
});
console.log(plainMonthDay.toString());
// output: 12-12
