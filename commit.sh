#!/bin/bash
submodules=('Engine' 'Experiments' 'Web' 'Workers' 'X10');

for sub in ${submodules[@]}; do
    cd ./$sub;
    git add .;
    git commit -m "AMOS AutoCommit";
    git push;
    cd ..;
done