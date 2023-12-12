import { Temporal } from "temporal-polyfill";

const nowInstant = Temporal.Now.instant();
console.log(nowInstant.toString());
// output: 2023-12-12T14:04:39.123Z ← 現在時刻
// exact time

const nowTimeZone = Temporal.Now.timeZone();
console.log(nowTimeZone.toString());
// output: Asia/Tokyo ← 現在のタイムゾーン

const nowZonedDateTime = Temporal.Now.zonedDateTime("2023-12-12T14:04:39.123Z");
console.log(nowZonedDateTime.toString());
// output: 2023-12-13T00:55:25.067+09:00[Asia/Tokyo] ← 特定のカレンダーからの現在時刻とタイムゾーン
// wall-clock time

const nowZonedDateTImeISO = Temporal.Now.zonedDateTimeISO();
console.log(nowZonedDateTImeISO.toString());
// output: 2023-12-13T01:14:21.387+09:00[Asia/Tokyo] ← ISO8601のカレンダーからの現在時刻とタイムゾーン
// wall-clock time
