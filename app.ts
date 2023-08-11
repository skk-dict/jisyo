import * as msgpack from 'https://esm.sh/@msgpack/msgpack';
import * as yaml from 'https://deno.land/std/yaml/mod.ts';
import { Hono } from 'https://deno.land/x/hono/mod.ts';
import { serve } from 'https://deno.land/std/http/server.ts';

const app = new Hono();

app.get('/:file{.*.mpk}', async (ctx) => {
  const file = ctx.req.param('file').replace('.mpk', '.yaml')
  const txt = await Deno.readTextFile('yaml/' + file);
  const obj = yaml.parse(txt);
  const buf = msgpack.encode(obj);
  return new Response(buf, {
    headers: {
      'Content-Type': 'application/x-msgpack',
    },
    status: 200,
  });
})

app.get('/:file{.*.json}', async (ctx) => {
  const file = ctx.req.param('file').replace('.json', '.yaml')
  const txt = await Deno.readTextFile('yaml/' + file);
  const obj = yaml.parse(txt);
  return new Response(JSON.stringify(obj), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  });
});

app.get('/:file{.*.yaml}', async (ctx) => {
  const file = ctx.req.param('file');
  const txt = await Deno.readTextFile('yaml/' + file);
  return new Response(txt, {
    headers: {
      'Content-Type': 'application/x-yaml',
    },
    status: 200,
  });
});

serve(app.fetch);
