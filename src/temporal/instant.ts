import { Temporal } from "temporal-polyfill";

const instant = Temporal.Instant.from("2023-12-12T00:00:00Z");
console.log(instant.toString());
// output: 2023-12-12T00:00:00Z
// exact time

console.log(instant.epochMilliseconds);
// output: 1702339200000
