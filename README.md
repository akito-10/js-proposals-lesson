# このレポジトリについて

TC39 の proposal(stage3 以上)を理解するために、自分なりにまとめたり、使ってみたりして理解を深めるためのレポジトリ。

## Temporal

### Temporal とは

[Temporal](https://tc39.es/proposal-temporal/docs/ja/index.html) は、グローバルオブジェクトであり、Date の既存の問題点を解決するために提案されたもの。

Temporal が Date の問題点をこう解決する

- 日付や時刻をより使いやすく
- DST(Daylight saving time)を考慮した演算、全てのタイムゾーンをサポート
- 特定の日時や時刻を明確に表すオブジェクト
- 厳格に定義された文字列をパース
- グレゴリオ歴以外のカレンダーをサポート

限定的なユースケースのための個別クラスを提供するため、コードの可読性が向上し、タイムゾーンが不明な時間に対して間違ったオフセット情報を与えるといったバグを防ぐ。

ここでいう、オフセット情報とは、
UTC からのオフセットを表す文字列で、例えば、日本の場合は、`+09:00` となる。

## Temporal の API

「Plain」から名前が始まるオブジェクトは、タイムゾーンが関連つけられていない日付を表す。(Wall-Clock Time)
このようなオブジェクトと Exact Time (カレンダーや場所によらない UTC のような時間を表現するもの) の変換は、タイムゾーンとサマータイムによって、曖昧になってしまう。
Temporal API はこのような曖昧さを解決する。

### Temporal.Instant

カレンダーや場所によらない、特定の時点での時刻を表す。（exact time）

人間にとって読みやすい形式ではないため、人間が読みやすい形式には、Temporal.ZonedDateTime や Temporal.PlainDateTime と、Temporal.TimeZone や Temporal.Calendar を組み合わせて使用。

### Temporal.ZonedDateTime

特定のタイムゾーンやカレンダーにおける date/time オブジェクトで、地球上の特定の地位域からみた日時を表す。

タイムゾーンやサマータイムを考慮した計算などに最適
