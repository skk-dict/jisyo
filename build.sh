#/bin/bash
deno run --allow-read --allow-write --allow-env txt2yaml.ts -e euc-jp -c "<TO BE FILLED>" -l "<TO BE FILLED>" -i $1 -o $2
