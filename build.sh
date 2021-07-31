#! /bin/bash
node prep;
cd ./client;
npm run build;
cd ../server;
bytenode --compile *.js;