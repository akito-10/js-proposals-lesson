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

### Temporal の API

「Plain」から名前が始まるオブジェクトは、タイムゾーンが関連つけられていない日付を表す。(Wall-Clock Time)
このようなオブジェクトと Exact Time (カレンダーや場所によらない UTC のような時間を表現するもの) の変換は、タイムゾーンとサマータイムによって、曖昧になってしまう。
Temporal API はこのような曖昧さを解決する。

#### Temporal.Instant

カレンダーや場所によらない、特定の時点での時刻を表す。（exact time）

人間にとって読みやすい形式ではないため、人間が読みやすい形式には、Temporal.ZonedDateTime や Temporal.PlainDateTime と、Temporal.TimeZone や Temporal.Calendar を組み合わせて使用。

#### Temporal.ZonedDateTime

特定のタイムゾーンやカレンダーにおける date/time オブジェクトで、地球上の特定の地位域からみた日時を表す。

タイムゾーンやサマータイムを考慮した計算などに最適

#### Temporal.PlainDate

特定の時間やタイムゾーンに紐付かないカレンダー上の日付を表す。

Temporal.PlainYearMonth や Temporal.PlainMonthDay といった部分的な日付データへ、更に変換することもできる。

#### Temporal.PlainTime

特定の日付やタイムゾーンに紐付かない wall-clock を表す。

#### Temporal.PlainDateTime

カレンダー上の日付とタイムゾーンに紐付かない wall-clock を表す。

Temporal.TimeZone によって Temporal.ZonedDateTime に変換可能。タイムゾーンを必要とする場合、特に他の値との演算を行いたい場合は、代わりに Temporal.ZonedDateTime を使用することを推奨。Temporal.ZonedDateTime を用いることで、サマータイムを自動的に考慮した日付の演算を行うことができる。

#### Temporal.PlainYearMonth

「日」を除いた日付を表す。

#### Temporal.PlainMonthDay

「年」を除いた日付を表す。

#### Temporal.Duration

5 分や 30 秒といった時間の長さを表す。日付演算処理や Temporal オブジェクト間の差分を表すために使う。
「1 時間 30 分ではなく、『90 分』を表したい」などのケースがあるため、単位の自然繰り上げはなし。

#### Temporal.TimeZone

IANA タイムゾーンや特定の UCT オフセット、または UTC そのものを表す。タイムゾーンは、UTC の日時をローカルの日時に変換するので、Temporal.TimeZone によって Temporal.Instant と Temporal.PlainDateTime を変換したり、特定の Temporal.Instant における UTC オフセットを取得したりできる。

#### Temporal.Calendar

国際化や地域化のために他のカレンダーシステムを利用することもできる。
日付には、カレンダーシステム関連の演算を行うために、Temporal.Calendar オブジェクトが関連付けられ、内部的にはこれらの日付の演算は、このカレンダーオブジェクトのメソッドによって実行される。

### Temporal のキーコンセプト

#### 曖昧性の解決

##### Wall-Clock Time と Exact Time の違い

Temporal の中核となるコンセプトは、Wall-Clock Time と Exact Time を区別すること。
では、Wall-Clock Time と Exact Time とは何か？

Wall-Clock Time とは、サマータイムやタイムゾーンによって影響を受けるようなローカルな時間のこと。

Exact Time とは、国際的な定義を持っており、UTC という特別なタイムゾーンによって定義される時間のこと。

Wall-Clock Time は、UTC Offset によって定義され、UTC からどれだけ離れているかを表す。
例えば、日本の場合は、`+09:00` となる。

Temporal.Instant は exact time だけを持ち、Temporal.ZonedDateTime は exact time の他にタイムゾーンやカレンダーシステムの情報を持つ。

Exact Time を表す方法として、Unix epoch(1970 年 1 月 1 日の真夜中)からの差分を数値で表す。例えば、Temporal.Instant（exact-time タイプ）は epoch からの経過ナノ秒を表す BigInt で構成できる。

##### タイムゾーンオフセットやサマータイム

タイムゾーンは UTC と Wall-Clock がどのように関連しているかを定義する。
つまりは、exact time を受け取り UTC オフセットを返す関数や、その反対方向への変換に対応する関数。

Temporal は TZ database と呼ばれる、タイムゾーン関数の世界的なリポジトリを使用する。
TZ database 以下のようなものを持つ。

- time zone ID
  - 地理的な範囲を市などで表したもの
    例: America/Los_Angeles、Europe/Paris
- UTC offset
  - 1970 年 1 月 1 日からのすべての情報が記載されている
  - サマータイムなどでオフセットが変更されることがある
