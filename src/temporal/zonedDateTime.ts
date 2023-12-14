import { Temporal } from "temporal-polyfill";

const zonedDateTime = Temporal.ZonedDateTime.from({
  year: 2023,
  month: 12,
  day: 12,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
  microsecond: 0,
  nanosecond: 0,
  timeZone: "Asia/Tokyo",
  calendar: "iso8601",
});
console.log(zonedDateTime.toString());
// output: 2023-12-12T00:00+09:00[Asia/Tokyo]
