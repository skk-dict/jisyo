import * as flags from "https://deno.land/std@0.144.0/flags/mod.ts";
const params = flags.parse(Deno.args);
const jisyo = JSON.parse(await Deno.readTextFile(params.i))
const lines = [] as string[]
lines.push(';; okuri-ari entries')
for (const key in jisyo.okuri_ari) {
  lines.push(`${key} /${jisyo.okuri_ari[key].join('/')}/`)
}
lines.push(';; okuri-nasi entries')
for (const key in jisyo.okuri_nasi) {
  lines.push(`${key} /${jisyo.okuri_ari[key].join('/')}/`)
}
await Deno.writeTextFile(params.o, lines.join('\n'))

