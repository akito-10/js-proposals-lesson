import { Temporal } from "temporal-polyfill";

const nowInstant = Temporal.Now.instant();
console.log(nowInstant.toString());
// output: 2023-12-12T14:04:39.123Z ← 現在時刻
// exact time

const nowTimeZone = Temporal.Now.timeZone();
console.log(nowTimeZone.toString());
// output: Asia/Tokyo ← 現在のタイムゾーン

const nowZonedDateTime = Temporal.Now.zonedDateTime("2023-12-12");
console.log(nowZonedDateTime.toString());
// output: 2023-12-13T00:55:25.067+09:00[Asia/Tokyo] ← 特定のカレンダーからの現在時刻とタイムゾーン
// wall-clock time

const nowZonedDateTImeISO = Temporal.Now.zonedDateTimeISO();
console.log(nowZonedDateTImeISO.toString());
// output: 2023-12-13T01:14:21.387+09:00[Asia/Tokyo] ← ISO8601のカレンダーからの現在時刻とタイムゾーン
// wall-clock time

const nowPlainDate = Temporal.Now.plainDate("2023-12-12");
console.log(nowPlainDate.toString());
// output: 2023-12-14 ← 特定のカレンダーからの現在日付

const nowPlainDateISO = Temporal.Now.plainDateISO();
console.log(nowPlainDateISO.toString());
// output: 2023-12-14 ← ISO8601のカレンダーからの現在日付

const nowPlainTimeISO = Temporal.Now.plainTimeISO();
console.log(nowPlainTimeISO.toString());
// output: 01:14:21.387 ← ISO8601のカレンダーからの現在時刻
// wall-clock time

const nowPlainDateTime = Temporal.Now.plainDateTime("2023-12-12");
console.log(nowPlainDateTime.toString());
// output: 2023-12-14T00:55:25.067 ← 特定のカレンダーからの現在日時
// wall-clock time

const nowPlainDateTimeISO = Temporal.Now.plainDateTimeISO();
console.log(nowPlainDateTimeISO.toString());
// output: 2023-12-14T01:14:21.387 ← ISO8601のカレンダーからの現在日時
// wall-clock time
