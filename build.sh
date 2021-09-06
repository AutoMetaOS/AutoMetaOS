#! /bin/bash
BASE=~/Documents/Github.nosync/Ronin;
NOCOLOR='\033[0m';
RED='\033[0;31m';
GREEN='\033[0;32m';
ORANGE='\033[0;33m';
BLUE='\033[0;34m';
PURPLE='\033[0;35m';
CYAN='\033[0;36m';
LIGHTGRAY='\033[0;37m';
DARKGRAY='\033[1;30m';
LIGHTRED='\033[1;31m';
LIGHTGREEN='\033[1;32m';
YELLOW='\033[1;33m';
LIGHTBLUE='\033[1;34m';
LIGHTPURPLE='\033[1;35m';
LIGHTCYAN='\033[1;36m';
WHITE='\033[1;37m';


# CLIENT BUILD
echo "${BLUE}Building Client...${NOCOLOR}";
node prep;
cd $BASE/UI/css;
cp ./g100.css $BASE/Web/static/shared/g100.css;
cd $BASE/Web;
rm -rf build .svelte*;
npx svelte-kit build;


# SERVER BUILD
echo "${BLUE}Building Server...${NOCOLOR}";
cd $BASE/server;
rm -rf *.jsc;
bytenode --compile *.js;