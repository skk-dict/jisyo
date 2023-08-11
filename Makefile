YAML := yaml/SKK-JISYO.JIS2.yaml yaml/SKK-JISYO.L.yaml yaml/SKK-JISYO.M.yaml yaml/SKK-JISYO.ML.yaml yaml/SKK-JISYO.S.yaml yaml/SKK-JISYO.assoc.yaml yaml/SKK-JISYO.china_taiwan.yaml yaml/SKK-JISYO.edict.yaml yaml/SKK-JISYO.edict2.yaml yaml/SKK-JISYO.emoji.yaml yaml/SKK-JISYO.fullname.yaml yaml/SKK-JISYO.geo.yaml yaml/SKK-JISYO.hukugougo.yaml yaml/SKK-JISYO.itaiji.yaml yaml/SKK-JISYO.jinmei.yaml yaml/SKK-JISYO.law.yaml yaml/SKK-JISYO.mazegaki.yaml yaml/SKK-JISYO.okinawa.yaml yaml/SKK-JISYO.pinyin.yaml yaml/SKK-JISYO.propernoun.yaml yaml/SKK-JISYO.pubdic+.yaml yaml/SKK-JISYO.station.yaml

JSON := json/SKK-JISYO.JIS2.json json/SKK-JISYO.L.json json/SKK-JISYO.M.json json/SKK-JISYO.ML.json json/SKK-JISYO.S.json json/SKK-JISYO.assoc.json json/SKK-JISYO.china_taiwan.json json/SKK-JISYO.edict.json json/SKK-JISYO.edict2.json json/SKK-JISYO.emoji.json json/SKK-JISYO.fullname.json json/SKK-JISYO.geo.json json/SKK-JISYO.hukugougo.json json/SKK-JISYO.itaiji.json json/SKK-JISYO.jinmei.json json/SKK-JISYO.law.json json/SKK-JISYO.mazegaki.json json/SKK-JISYO.okinawa.json json/SKK-JISYO.pinyin.json json/SKK-JISYO.propernoun.json json/SKK-JISYO.pubdic+.json json/SKK-JISYO.station.json

all: $(YAML) $(JSON)

yaml/SKK-JISYO.%.yaml: legacy/SKK-JISYO.% meta/SKK-JISYO.%.yaml
	mkdir -p yaml
	nkf -d -w $(word 1,$^) | deno run --allow-read --allow-write ./script/txt2yaml.ts -i /dev/stdin -o $@ -m $(word 2,$^)

json/SKK-JISYO.%.json: yaml/SKK-JISYO.%.yaml
	mkdir -p json
	yj -i < $< > $@
