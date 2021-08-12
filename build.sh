#! /bin/bash
# CLIENT BUILD
BASE=~/Documents/Github.nosync/Ronin
node prep;
cd $BASE/client/src/HakamaUI/css;
cp ./all.css ../../../static/shared/hakama.css;
cd $BASE/client;
rm -rf build .svelte-kit;
npx svelte-kit build;


# SERVER BUILD
# npm run build;
# cd ../server;
# bytenode --compile *.js;