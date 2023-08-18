# JISYO: かな漢字変換エンジン SKKのための新しい辞書形式

## 概要

YAMLを入力としてJSONに変換されることを前提とした辞書形式である。
仕様が将来変更されるをことを考慮し、本形式では版の指定を必須項目とする。
また辞書データが仕様に適合しているかを検証するためのJSON Schemaを提供する。

## 辞書

The complete archive of the SKK-JISYO.* dictionaries is available at
[https://skk-dict.github.io/jisyo/SKK-JISYO.tar.gz](https://skk-dict.github.io/jisyo/SKK-JISYO.tar.gz).

| Name | YAML | JSON | Msgpack |
| :-: |  :-: | :-: | :-: |
| SKK-JISYO.JIS2 | [SKK-JISYO.JIS2.yaml](https://skk-dict.github.io/SKK-JISYO.JIS2.yaml) | [SKK-JISYO.JIS2.json](https://skk-dict.github.io/SKK-JISYO.JIS2.json) | [SKK-JISYO.JIS2.mpk](https://skk-dict.github.io/SKK-JISYO.JIS2.mpk) |
| SKK-JISYO.L | [SKK-JISYO.L.yaml](https://skk-dict.github.io/SKK-JISYO.L.yaml) | [SKK-JISYO.L.json](https://skk-dict.github.io/SKK-JISYO.L.json) | [SKK-JISYO.L.mpk](https://skk-dict.github.io/SKK-JISYO.L.mpk) |
| SKK-JISYO.M | [SKK-JISYO.M.yaml](https://skk-dict.github.io/SKK-JISYO.M.yaml) | [SKK-JISYO.M.json](https://skk-dict.github.io/SKK-JISYO.M.json) | [SKK-JISYO.M.mpk](https://skk-dict.github.io/SKK-JISYO.M.mpk) |
| SKK-JISYO.ML | [SKK-JISYO.ML.yaml](https://skk-dict.github.io/SKK-JISYO.ML.yaml) | [SKK-JISYO.ML.json](https://skk-dict.github.io/SKK-JISYO.ML.json) | [SKK-JISYO.ML.mpk](https://skk-dict.github.io/SKK-JISYO.ML.mpk) |
| SKK-JISYO.S | [SKK-JISYO.S.yaml](https://skk-dict.github.io/SKK-JISYO.S.yaml) | [SKK-JISYO.S.json](https://skk-dict.github.io/SKK-JISYO.S.json) | [SKK-JISYO.S.mpk](https://skk-dict.github.io/SKK-JISYO.S.mpk) |
| SKK-JISYO.assoc | [SKK-JISYO.assoc.yaml](https://skk-dict.github.io/SKK-JISYO.assoc.yaml) | [SKK-JISYO.assoc.json](https://skk-dict.github.io/SKK-JISYO.assoc.json) | [SKK-JISYO.assoc.mpk](https://skk-dict.github.io/SKK-JISYO.assoc.mpk) |
| SKK-JISYO.china_taiwan | [SKK-JISYO.china_taiwan.yaml](https://skk-dict.github.io/SKK-JISYO.china_taiwan.yaml) | [SKK-JISYO.china_taiwan.json](https://skk-dict.github.io/SKK-JISYO.china_taiwan.json) | [SKK-JISYO.china_taiwan.mpk](https://skk-dict.github.io/SKK-JISYO.china_taiwan.mpk) |
| SKK-JISYO.edict | [SKK-JISYO.edict.yaml](https://skk-dict.github.io/SKK-JISYO.edict.yaml) | [SKK-JISYO.edict.json](https://skk-dict.github.io/SKK-JISYO.edict.json) | [SKK-JISYO.edict.mpk](https://skk-dict.github.io/SKK-JISYO.edict.mpk) |
| SKK-JISYO.edict2 | [SKK-JISYO.edict2.yaml](https://skk-dict.github.io/SKK-JISYO.edict2.yaml) | [SKK-JISYO.edict2.json](https://skk-dict.github.io/SKK-JISYO.edict2.json) | [SKK-JISYO.edict2.mpk](https://skk-dict.github.io/SKK-JISYO.edict2.mpk) |
| SKK-JISYO.emoji | [SKK-JISYO.emoji.yaml](https://skk-dict.github.io/SKK-JISYO.emoji.yaml) | [SKK-JISYO.emoji.json](https://skk-dict.github.io/SKK-JISYO.emoji.json) | [SKK-JISYO.emoji.mpk](https://skk-dict.github.io/SKK-JISYO.emoji.mpk) |
| SKK-JISYO.fullname | [SKK-JISYO.fullname.yaml](https://skk-dict.github.io/SKK-JISYO.fullname.yaml) | [SKK-JISYO.fullname.json](https://skk-dict.github.io/SKK-JISYO.fullname.json) | [SKK-JISYO.fullname.mpk](https://skk-dict.github.io/SKK-JISYO.fullname.mpk) |
| SKK-JISYO.geo | [SKK-JISYO.geo.yaml](https://skk-dict.github.io/SKK-JISYO.geo.yaml) | [SKK-JISYO.geo.json](https://skk-dict.github.io/SKK-JISYO.geo.json) | [SKK-JISYO.geo.mpk](https://skk-dict.github.io/SKK-JISYO.geo.mpk) |
| SKK-JISYO.hukugougo | [SKK-JISYO.hukugougo.yaml](https://skk-dict.github.io/SKK-JISYO.hukugougo.yaml) | [SKK-JISYO.hukugougo.json](https://skk-dict.github.io/SKK-JISYO.hukugougo.json) | [SKK-JISYO.hukugougo.mpk](https://skk-dict.github.io/SKK-JISYO.hukugougo.mpk) |
| SKK-JISYO.itaiji | [SKK-JISYO.itaiji.yaml](https://skk-dict.github.io/SKK-JISYO.itaiji.yaml) | [SKK-JISYO.itaiji.json](https://skk-dict.github.io/SKK-JISYO.itaiji.json) | [SKK-JISYO.itaiji.mpk](https://skk-dict.github.io/SKK-JISYO.itaiji.mpk) |
| SKK-JISYO.jinmei | [SKK-JISYO.jinmei.yaml](https://skk-dict.github.io/SKK-JISYO.jinmei.yaml) | [SKK-JISYO.jinmei.json](https://skk-dict.github.io/SKK-JISYO.jinmei.json) | [SKK-JISYO.jinmei.mpk](https://skk-dict.github.io/SKK-JISYO.jinmei.mpk) |
| SKK-JISYO.law | [SKK-JISYO.law.yaml](https://skk-dict.github.io/SKK-JISYO.law.yaml) | [SKK-JISYO.law.json](https://skk-dict.github.io/SKK-JISYO.law.json) | [SKK-JISYO.law.mpk](https://skk-dict.github.io/SKK-JISYO.law.mpk) |
| SKK-JISYO.mazegaki | [SKK-JISYO.mazegaki.yaml](https://skk-dict.github.io/SKK-JISYO.mazegaki.yaml) | [SKK-JISYO.mazegaki.json](https://skk-dict.github.io/SKK-JISYO.mazegaki.json) | [SKK-JISYO.mazegaki.mpk](https://skk-dict.github.io/SKK-JISYO.mazegaki.mpk) |
| SKK-JISYO.okinawa | [SKK-JISYO.okinawa.yaml](https://skk-dict.github.io/SKK-JISYO.okinawa.yaml) | [SKK-JISYO.okinawa.json](https://skk-dict.github.io/SKK-JISYO.okinawa.json) | [SKK-JISYO.okinawa.mpk](https://skk-dict.github.io/SKK-JISYO.okinawa.mpk) |
| SKK-JISYO.pinyin | [SKK-JISYO.pinyin.yaml](https://skk-dict.github.io/SKK-JISYO.pinyin.yaml) | [SKK-JISYO.pinyin.json](https://skk-dict.github.io/SKK-JISYO.pinyin.json) | [SKK-JISYO.pinyin.mpk](https://skk-dict.github.io/SKK-JISYO.pinyin.mpk) |
| SKK-JISYO.propernoun | [SKK-JISYO.propernoun.yaml](https://skk-dict.github.io/SKK-JISYO.propernoun.yaml) | [SKK-JISYO.propernoun.json](https://skk-dict.github.io/SKK-JISYO.propernoun.json) | [SKK-JISYO.propernoun.mpk](https://skk-dict.github.io/SKK-JISYO.propernoun.mpk) |
| SKK-JISYO.pubdic+ | [SKK-JISYO.pubdic+.yaml](https://skk-dict.github.io/SKK-JISYO.pubdic+.yaml) | [SKK-JISYO.pubdic+.json](https://skk-dict.github.io/SKK-JISYO.pubdic+.json) | [SKK-JISYO.pubdic+.mpk](https://skk-dict.github.io/SKK-JISYO.pubdic+.mpk) |
| SKK-JISYO.station | [SKK-JISYO.station.yaml](https://skk-dict.github.io/SKK-JISYO.station.yaml) | [SKK-JISYO.station.json](https://skk-dict.github.io/SKK-JISYO.station.json) | [SKK-JISYO.station.mpk](https://skk-dict.github.io/SKK-JISYO.station.mpk) |

## プロジェクトの構成

- `SKK-JISYO.L.yaml`: `SKK-JISYO.L` を JISYO形式に変換したもの
- `jisyo.schema.json`: JISYO形式を検証するためのJSON Schema (第7版)
- `txt2yaml.ts`: 旧形式からJISYO形式への変換するスクリプト

## スクリプトの使用方法

```
deno run -A ./txt2yaml.ts -i <input> -o <output> -e <encoding> -c <copyright> -l <license>
```
