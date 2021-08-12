#! /bin/bash
# CLIENT BUILD
BASE=~/Documents/Github.nosync/Ronin
node prep;
cd $BASE/HakamaUI/css;
cp ./g100.css $BASE/client/static/shared/g100.css;
cd $BASE/client;
rm -rf build .svelte-kit;
npx svelte-kit build;


# SERVER BUILD
cd $BASE/server;
bytenode --compile *.js;