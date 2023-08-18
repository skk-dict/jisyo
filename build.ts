import * as msgpack from 'https://deno.land/std/msgpack/mod.ts';
import * as yaml from 'https://deno.land/std/yaml/mod.ts';
import { Tar } from 'https://deno.land/std/archive/mod.ts';
import { readableStreamFromReader, copy }  from 'https://deno.land/std/streams/mod.ts';

await Deno.mkdir('dist/yaml', { recursive: true });
await Deno.mkdir('dist/json', { recursive: true });
await Deno.mkdir('dist/mpk', { recursive: true });

async function copyfile(src: string, dest: string): Promise<void> {
  const srcFile = await Deno.open(src);
  const destFile = await Deno.open(dest, { create: true, write: true });
  await copy(srcFile, destFile);
}

const tar = new Tar();
for await (const f of Deno.readDir('yaml')) {
  const yamlFilename = f.name;
  await copyfile('yaml/'+yamlFilename, 'dist/yaml/'+yamlFilename);
  await tar.append(yamlFilename, {
    filePath: 'dist/yaml/'+yamlFilename,
  });
  const jisyo = yaml.parse(await Deno.readTextFile('yaml/'+yamlFilename));
  const jsonFilename = yamlFilename.replace('.yaml', '.json');
  const jsonFile = JSON.stringify(jisyo);
  await Deno.writeTextFile('dist/json/'+jsonFilename, jsonFile);
  await tar.append(jsonFilename, {
    filePath: 'dist/json/'+jsonFilename,
  });
  const mpkFilename = yamlFilename.replace('.yaml', '.mpk');
  const mpkFile = msgpack.encode(jisyo as msgpack.ValueType);
  await Deno.writeFile('dist/mpk/'+mpkFilename, mpkFile);
  await tar.append(mpkFilename, {
    filePath: 'dist/mpk/'+mpkFilename,
  });
}
const tarStream = readableStreamFromReader(tar.getReader());
const gzipStream = new CompressionStream('gzip');
const outputFile = await Deno.open('dist/SKK-JISYO.tar.gz', { create: true, write: true });
await tarStream.pipeThrough(gzipStream).pipeTo(outputFile.writable);
