#!/bin/bash
submodules=('config' 'db' 'Experiments' 'UI' 'Web' 'Workers' 'X10');

for sub in ${submodules[@]}; do
    cd ./$sub;
    echo "COMMITING $sub \n";
    git add .;
    git commit -m "New Iconset";
    git push;
    cd ..;
done