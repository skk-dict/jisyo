// Copyright: 2022 TANIGUCHI Masaya
// License: CC0 
import iconv from "https://esm.sh/iconv-lite?no-check";
import jsonschema from "https://esm.sh/jsonschema";
import YAML from "https://esm.sh/yaml";
import * as flags from "https://deno.land/std@0.144.0/flags/mod.ts";
import jisyoschema from "./schema/jisyo.schema.v0.0.0.json" assert { type: 'json' };

const VERSION = "0.0.0" as const;

const params = flags.parse(Deno.args);

const jisyo = {
  version: VERSION,
  copyright: params.c,
  license: params.l,
  okuri_ari: {} as Record<string, string[]>,
  okuri_nasi: {} as Record<string, string[]>,
};

const blob = await Deno.readFile(params.i);
const [okuriAri, okuriNasi] = iconv.decode(blob, params.e)
  .split(";; okuri-nasi entries") as [string, string];
const pattern = /^(?<!;)(.*) \/(.*)\/$/gm;
for (const [_, key, value] of okuriAri.matchAll(pattern)) {
  const candidates = value.split("/").map((_) => _.replace(/;.*$/, ""));
  jisyo.okuri_ari[key] = candidates;
}
for (const [_, key, value] of okuriNasi.matchAll(pattern)) {
  const candidates = value.split("/").map((_) => _.replace(/;.*$/, ""));
  jisyo.okuri_nasi[key] = candidates;
}

const validator = new jsonschema.Validator();
const result = validator.validate(jisyo, jisyoschema);
if (!result.valid) {
  for(const error of result.errors) {
    console.log(error.message);
  }
  Deno.exit(1);
}

await Deno.writeTextFile(params.o, YAML.stringify(jisyo));
