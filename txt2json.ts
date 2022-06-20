import P from "https://esm.sh/parsimmon@v1.18.1"
import iconv from "https://esm.sh/iconv-lite?no-check";
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

const input = await Deno.readTextFile("/dev/stdin")
const license = await Deno.readTextFile(params.l)
const description = await Deno.readTextFile(params.d)
const copyright = await Deno.readTextFile(params.c)
const jisyo = {
  description,
  copyright,
  license,
  ...LegacyFormat.jisyo.parse(input)
}
await Deno.writeTextFile("/dev/stdout", JSON.stringify(jisyo))
