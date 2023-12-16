import { Temporal } from "temporal-polyfill";

const timeZone = Temporal.TimeZone.from("Asia/Tokyo");

console.log(timeZone.getInstantFor?.("2023-12-12T00:00:00").toString());
// output: 2023-12-11T15:00:00Z
console.log(timeZone.getPlainDateTimeFor?.("2023-12-12T00:00:00Z").toString());
// output: 2023-12-12T09:00:00
console.log(
  timeZone.getPreviousTransition?.(Temporal.Now.instant())?.toString()
);
console.log(timeZone.getNextTransition?.(Temporal.Now.instant()));
