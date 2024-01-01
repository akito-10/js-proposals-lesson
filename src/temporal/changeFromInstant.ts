import { Temporal } from "temporal-polyfill";

const instant = Temporal.Instant.from("2023-12-12T00:00:00Z");
console.log(instant.toString());
// 2023-12-12T00:00:00Z

const formatOptions = {
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
} as const;

const zdt = instant.toZonedDateTimeISO("Asia/Tokyo");
console.log(zdt.toString());
// output: 2023-12-12T09:00+09:00[Asia/Tokyo]

console.log(
  zdt.toLocaleString("en-us", { ...formatOptions, calendar: zdt.calendar })
);
// output: Dec 12, 2023 AD, 9:00:00 AM

console.log(zdt.year);
// output: 2023

console.log(
  instant
    .toZonedDateTime({ timeZone: "Asia/Tokyo", calendar: "iso8601" })
    .toLocaleString("ja-jp", formatOptions)
);
// output: 西暦2023年12月12日 9:00:00

const zdt2 = instant.toZonedDateTime({
  timeZone: "Asia/Tokyo",
  calendar: "japanese",
});
console.log(zdt2.toString());
// output: 2023-12-12T09:00:00+09:00[Asia/Tokyo][u-ca=japanese]
