# JISYO: かな漢字変換エンジン SKKのための新しい辞書形式

## 概要

YAMLを入力としてJSONに変換されることを前提とした辞書形式である。
仕様が将来変更されるをことを考慮し、本形式では版の指定を必須項目とする。
また辞書データが仕様に適合しているかを検証するためのJSON Schemaを提供する。

## 辞書

| Name | YAML | JSON | Msgpack |
| :-: |  :-: | :-: | :-: |
| SKK-JISYO.JIS2 | [SKK-JISYO.JIS2.yaml](http://jisyo.deno.dev/SKK-JISYO.JIS2.yaml) | [SKK-JISYO.JIS2.json](https://jisyo.deno.dev/SKK-JISYO.JIS2.json) | [SKK-JISYO.JIS2.mpk](https://jisyo.deno.dev/SKK-JISYO.JIS2.mpk) |
| SKK-JISYO.L | [SKK-JISYO.L.yaml](http://jisyo.deno.dev/SKK-JISYO.L.yaml) | [SKK-JISYO.L.json](https://jisyo.deno.dev/SKK-JISYO.L.json) | [SKK-JISYO.L.mpk](https://jisyo.deno.dev/SKK-JISYO.L.mpk) |
| SKK-JISYO.M | [SKK-JISYO.M.yaml](http://jisyo.deno.dev/SKK-JISYO.M.yaml) | [SKK-JISYO.M.json](https://jisyo.deno.dev/SKK-JISYO.M.json) | [SKK-JISYO.M.mpk](https://jisyo.deno.dev/SKK-JISYO.M.mpk) |
| SKK-JISYO.ML | [SKK-JISYO.ML.yaml](http://jisyo.deno.dev/SKK-JISYO.ML.yaml) | [SKK-JISYO.ML.json](https://jisyo.deno.dev/SKK-JISYO.ML.json) | [SKK-JISYO.ML.mpk](https://jisyo.deno.dev/SKK-JISYO.ML.mpk) |
| SKK-JISYO.S | [SKK-JISYO.S.yaml](http://jisyo.deno.dev/SKK-JISYO.S.yaml) | [SKK-JISYO.S.json](https://jisyo.deno.dev/SKK-JISYO.S.json) | [SKK-JISYO.S.mpk](https://jisyo.deno.dev/SKK-JISYO.S.mpk) |
| SKK-JISYO.assoc | [SKK-JISYO.assoc.yaml](http://jisyo.deno.dev/SKK-JISYO.assoc.yaml) | [SKK-JISYO.assoc.json](https://jisyo.deno.dev/SKK-JISYO.assoc.json) | [SKK-JISYO.assoc.mpk](https://jisyo.deno.dev/SKK-JISYO.assoc.mpk) |
| SKK-JISYO.china_taiwan | [SKK-JISYO.china_taiwan.yaml](http://jisyo.deno.dev/SKK-JISYO.china_taiwan.yaml) | [SKK-JISYO.china_taiwan.json](https://jisyo.deno.dev/SKK-JISYO.china_taiwan.json) | [SKK-JISYO.china_taiwan.mpk](https://jisyo.deno.dev/SKK-JISYO.china_taiwan.mpk) |
| SKK-JISYO.edict | [SKK-JISYO.edict.yaml](http://jisyo.deno.dev/SKK-JISYO.edict.yaml) | [SKK-JISYO.edict.json](https://jisyo.deno.dev/SKK-JISYO.edict.json) | [SKK-JISYO.edict.mpk](https://jisyo.deno.dev/SKK-JISYO.edict.mpk) |
| SKK-JISYO.edict2 | [SKK-JISYO.edict2.yaml](http://jisyo.deno.dev/SKK-JISYO.edict2.yaml) | [SKK-JISYO.edict2.json](https://jisyo.deno.dev/SKK-JISYO.edict2.json) | [SKK-JISYO.edict2.mpk](https://jisyo.deno.dev/SKK-JISYO.edict2.mpk) |
| SKK-JISYO.emoji | [SKK-JISYO.emoji.yaml](http://jisyo.deno.dev/SKK-JISYO.emoji.yaml) | [SKK-JISYO.emoji.json](https://jisyo.deno.dev/SKK-JISYO.emoji.json) | [SKK-JISYO.emoji.mpk](https://jisyo.deno.dev/SKK-JISYO.emoji.mpk) |
| SKK-JISYO.fullname | [SKK-JISYO.fullname.yaml](http://jisyo.deno.dev/SKK-JISYO.fullname.yaml) | [SKK-JISYO.fullname.json](https://jisyo.deno.dev/SKK-JISYO.fullname.json) | [SKK-JISYO.fullname.mpk](https://jisyo.deno.dev/SKK-JISYO.fullname.mpk) |
| SKK-JISYO.geo | [SKK-JISYO.geo.yaml](http://jisyo.deno.dev/SKK-JISYO.geo.yaml) | [SKK-JISYO.geo.json](https://jisyo.deno.dev/SKK-JISYO.geo.json) | [SKK-JISYO.geo.mpk](https://jisyo.deno.dev/SKK-JISYO.geo.mpk) |
| SKK-JISYO.hukugougo | [SKK-JISYO.hukugougo.yaml](http://jisyo.deno.dev/SKK-JISYO.hukugougo.yaml) | [SKK-JISYO.hukugougo.json](https://jisyo.deno.dev/SKK-JISYO.hukugougo.json) | [SKK-JISYO.hukugougo.mpk](https://jisyo.deno.dev/SKK-JISYO.hukugougo.mpk) |
| SKK-JISYO.itaiji | [SKK-JISYO.itaiji.yaml](http://jisyo.deno.dev/SKK-JISYO.itaiji.yaml) | [SKK-JISYO.itaiji.json](https://jisyo.deno.dev/SKK-JISYO.itaiji.json) | [SKK-JISYO.itaiji.mpk](https://jisyo.deno.dev/SKK-JISYO.itaiji.mpk) |
| SKK-JISYO.jinmei | [SKK-JISYO.jinmei.yaml](http://jisyo.deno.dev/SKK-JISYO.jinmei.yaml) | [SKK-JISYO.jinmei.json](https://jisyo.deno.dev/SKK-JISYO.jinmei.json) | [SKK-JISYO.jinmei.mpk](https://jisyo.deno.dev/SKK-JISYO.jinmei.mpk) |
| SKK-JISYO.law | [SKK-JISYO.law.yaml](http://jisyo.deno.dev/SKK-JISYO.law.yaml) | [SKK-JISYO.law.json](https://jisyo.deno.dev/SKK-JISYO.law.json) | [SKK-JISYO.law.mpk](https://jisyo.deno.dev/SKK-JISYO.law.mpk) |
| SKK-JISYO.mazegaki | [SKK-JISYO.mazegaki.yaml](http://jisyo.deno.dev/SKK-JISYO.mazegaki.yaml) | [SKK-JISYO.mazegaki.json](https://jisyo.deno.dev/SKK-JISYO.mazegaki.json) | [SKK-JISYO.mazegaki.mpk](https://jisyo.deno.dev/SKK-JISYO.mazegaki.mpk) |
| SKK-JISYO.okinawa | [SKK-JISYO.okinawa.yaml](http://jisyo.deno.dev/SKK-JISYO.okinawa.yaml) | [SKK-JISYO.okinawa.json](https://jisyo.deno.dev/SKK-JISYO.okinawa.json) | [SKK-JISYO.okinawa.mpk](https://jisyo.deno.dev/SKK-JISYO.okinawa.mpk) |
| SKK-JISYO.pinyin | [SKK-JISYO.pinyin.yaml](http://jisyo.deno.dev/SKK-JISYO.pinyin.yaml) | [SKK-JISYO.pinyin.json](https://jisyo.deno.dev/SKK-JISYO.pinyin.json) | [SKK-JISYO.pinyin.mpk](https://jisyo.deno.dev/SKK-JISYO.pinyin.mpk) |
| SKK-JISYO.propernoun | [SKK-JISYO.propernoun.yaml](http://jisyo.deno.dev/SKK-JISYO.propernoun.yaml) | [SKK-JISYO.propernoun.json](https://jisyo.deno.dev/SKK-JISYO.propernoun.json) | [SKK-JISYO.propernoun.mpk](https://jisyo.deno.dev/SKK-JISYO.propernoun.mpk) |
| SKK-JISYO.pubdic+ | [SKK-JISYO.pubdic+.yaml](http://jisyo.deno.dev/SKK-JISYO.pubdic+.yaml) | [SKK-JISYO.pubdic+.json](https://jisyo.deno.dev/SKK-JISYO.pubdic+.json) | [SKK-JISYO.pubdic+.mpk](https://jisyo.deno.dev/SKK-JISYO.pubdic+.mpk) |
| SKK-JISYO.station | [SKK-JISYO.station.yaml](http://jisyo.deno.dev/SKK-JISYO.station.yaml) | [SKK-JISYO.station.json](https://jisyo.deno.dev/SKK-JISYO.station.json) | [SKK-JISYO.station.mpk](https://jisyo.deno.dev/SKK-JISYO.station.mpk) |

## プロジェクトの構成

- `SKK-JISYO.L.yaml`: `SKK-JISYO.L` を JISYO形式に変換したもの
- `jisyo.schema.json`: JISYO形式を検証するためのJSON Schema (第7版)
- `txt2yaml.ts`: 旧形式からJISYO形式への変換するスクリプト

## スクリプトの使用方法

```
deno run -A ./txt2yaml.ts -i <input> -o <output> -e <encoding> -c <copyright> -l <license>
```
