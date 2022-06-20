import P from "https://esm.sh/parsimmon@v1.18.1"
import YAML from "https://esm.sh/yaml@v2.1.1"
import * as flags from "https://deno.land/std@0.144.0/flags/mod.ts";

const params = flags.parse(Deno.args);

function delisp(sexp: string): string {
  return sexp
    .replace(/\(concat "(.*?)"\)/g, "$1")
    .replace(/\\057/g, "/")
    .replace(/\\073/g, ";")
}

const LegacyFormat = P.createLanguage({
  comments: () => P.regexp(/^;;$|^;;.(?!okuri)[^\r\n]*?$/m).skip(P.newline).many(),
  kana: () => P.regexp(/^\S+/m),
  kanji: () => P.regexp(/([^\/\r\n;]+)(?:;[^\/\r\n;]+)*/, 1).map(delisp),
  record: Q => P.seq(Q.kana, P.string(' /').then(Q.kanji.skip(P.string('/')).many())),
  okuri_ari: Q => P.regexp(/^;;\s+okuri-ari entries.*?$/m).skip(P.newline).then(Q.record.skip(P.newline).many()),
  okuri_nasi: Q => P.regexp(/^;;\s+okuri-nasi entries.*?$/m).skip(P.newline).then(Q.record.skip(P.newline).many()),
  jisyo: Q => P.seqMap(
    Q.comments,
    Q.okuri_ari.map(Object.fromEntries),
    Q.okuri_nasi.map(Object.fromEntries),
    (_, okuri_ari, okuri_nasi) => ({ okuri_ari, okuri_nasi })
  )
})

const input = await Deno.readTextFile(params.i)
const meta = YAML.parse(await Deno.readTextFile(params.m))
const jisyo = {
  ...meta,
  ...(LegacyFormat.jisyo.parse(input) as any).value
}
await Deno.writeTextFile(params.o, YAML.stringify(jisyo))
