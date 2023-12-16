import { Temporal } from "temporal-polyfill";

const duration = Temporal.Duration.from({
  hours: 18,
});
console.log(duration.total({ unit: "days" }));
// output: 0.75

console.log(duration.total({ unit: "hours" }));
// output: 18

console.log(duration.total({ unit: "minutes" }));
// output: 1080

console.log(duration.total({ unit: "seconds" }));
// output: 64800

const now = Temporal.Now.zonedDateTimeISO();

const yesterday = now.subtract({ days: 1 });
console.log(now.toString(), yesterday.toString());

const diff = now.since(yesterday);
console.log(diff.hours);
// output: 24
