all: yaml/SKK-JISYO.JIS2.yaml yaml/SKK-JISYO.L.yaml yaml/SKK-JISYO.M.yaml yaml/SKK-JISYO.ML.yaml yaml/SKK-JISYO.S.yaml yaml/SKK-JISYO.assoc.yaml yaml/SKK-JISYO.china_taiwan.yaml yaml/SKK-JISYO.edict.yaml yaml/SKK-JISYO.edict2.yaml yaml/SKK-JISYO.emoji.yaml yaml/SKK-JISYO.fullname.yaml yaml/SKK-JISYO.geo.yaml yaml/SKK-JISYO.hukugougo.yaml yaml/SKK-JISYO.itaiji.yaml yaml/SKK-JISYO.jinmei.yaml yaml/SKK-JISYO.law.yaml yaml/SKK-JISYO.mazegaki.yaml yaml/SKK-JISYO.okinawa.yaml yaml/SKK-JISYO.pinyin.yaml yaml/SKK-JISYO.propernoun.yaml yaml/SKK-JISYO.pubdic+.yaml yaml/SKK-JISYO.station.yaml

yaml/SKK-JISYO.%.yaml: legacy/SKK-JISYO.% meta/SKK-JISYO.%.yaml
	nkf -d -w $(word 1,$^) | deno run --allow-read --allow-write ./txt2yaml.ts -i /dev/stdin -o $@ -m $(word 2,$^)
